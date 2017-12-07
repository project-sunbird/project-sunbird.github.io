require 'json'

module Jekyll
  class PlatformPage < Page
    def initialize(site, base, type, directory, page, platform, section, isDefaultPlatform, isDefaultSection)
      @site = site
      @base = base
      # set the type to empty if overview so that overview pages will be at root
      # types = if type != 'overview' then type + 's' else '' end

      if platform != '' and !isDefaultPlatform then
        @dir = File.join(directory, page.name.split(".")[0], section)
        @name = platform + '.md'
      elsif isDefaultPlatform and !isDefaultSection then
        @dir = File.join(directory, page.name.split(".")[0])
        @name = section + '.md'
      elsif section != '' and section != 'guide' and !isDefaultSection then
        @dir = File.join(directory, page.name.split(".")[0])
        @name = section + '.md'
      #elsif isDefaultSection then
      else
        @dir = directory
        @name = page.name.split(".")[0] + '.md'
      end

      if File.exist?(File.join(base, 'pages', directory, page.name))
        self.read_yaml(File.join(base, 'pages', directory), page.name)
        self.process(@name)
      #else
        #self.read_yaml(File.join(base, 'recipes'), page.name)
        #self.process(@name)
      end

      formatted_sections = {
        "overview" => "Overview",
        "guide" => "Guide",
        "advanced" => "Advanced",
        "support" => "Support"
      }

      formatted_platforms = {
        "ios" => "iOS",
        "android" => "Android",
        "web" => "Web"
      }

      self.data[section] = true
      self.data['section'] = section
      self.data['section_formatted'] = formatted_sections[section] or section
      self.data[platform] = true
      self.data['platform'] = platform
      self.data['platform_formatted'] = formatted_platforms[platform] or platform
      self.data['default'] = isDefaultPlatform
      self.data['layout'] = 'page'
      #if isDefault = true and platform != false
      #  self.data['section'] = section
      #  self.data['guide'] = true
      #end

      path_page_name = page.name.split(".")[0]
      if path_page_name == 'index' then path_page_name = '' end

      self.data['current_path'] = if directory.length > 0 && path_page_name.length > 0 then directory + '/' + path_page_name else directory end

    end
  end

  class PlatformGenerator < Generator
    def buildSiteMap(site)
      group_pages = site.pages.select { |page| ['recipe', 'overview', 'domain', 'reference'].include?(page.data['type']) }
      site.data['site_map'] = {
        'marketing-channels' => {},
        'cross-channel-analytics' => {},
        'data-exchange' => {},
        'basic-setup' => {},
        'next-steps' => {},
        'github-sdks' => {},
        'getting-started' => {},
        'other' => {}
      }

      group_pages.each do |page|
        page_sections = page.data['sections'] || []
        page_platforms = page.data['platforms'] || []


        path = page.name.split(".")[0]
        if path == 'index' then path = '' end

        if page.data['directory']
          site.data['site_map'][page.data['directory']][path] = {
            'path' => path,
            'sections' => Hash[page_sections.zip(page_sections.map {|i| true })],
            'platforms' => Hash[page_platforms.zip(page_platforms.map {|i| true })],
            'title' => page.data['title'],
            'weight' => page.data['weight'] || 0
          }
        end
      end
    end

    def generate(site)
      buildSiteMap(site)
      filtered_pages = site.pages.select { |page| ['recipe', 'overview', 'domain', 'reference', 'landing'].include?(page.data['type']) }
      site.pages.reject! { |page| page.data['type'] == 'ingredient' }

      filtered_pages.each do |page|
        if page.data['directory'] then
          if page.data['sections'] then
            page.data['sections'].each do |section|

              site.pages << PlatformPage.new(site, site.source, page.data['type'], page.data['directory'], page, '', section, false, false)
            end
          end
          # add a default page as the first value in the array
          default_platform = if page.data['platforms'] then page.data['platforms'][0] else '' end
          default_section = if page.data['sections'] then page.data['sections'][0] else '' end

          site.pages << PlatformPage.new(site, site.source, page.data['type'], page.data['directory'], page, default_platform, default_section, true, true)

          if page.data['sections'] then
            # allow platform-specific pages for any section
            for each_section in page.data['sections']
              if page.data['platforms'] then
                page.data['platforms'].each do |platform|
                  site.pages << PlatformPage.new(site, site.source, page.data['type'], page.data['directory'], page, platform, each_section, false, false)
                end
              end

              default_platform = if page.data['platforms'] then page.data['platforms'][0] else '' end
              site.pages << PlatformPage.new(site, site.source, page.data['type'], page.data['directory'], page, default_platform, each_section, true, false)
            end
          end

        end
      end

    end
  end
end
