require 'json'

module Jekyll
  class VersionPage < Page
    def initialize(site, base, type, directory, page)
      @site = site
      @base = base
      @dir = directory
      @name = page.name.split(".")[0] + '.md'
      
      if File.exist?(File.join(base, 'pages', directory, page.name))
        self.read_yaml(File.join(base, 'pages', directory), page.name)
        self.process(@name)
      end
       
      self.data['layout'] = 'page'
      
      path_page_name = page.name.split(".")[0]
      if path_page_name == 'index' then path_page_name = '' end

      self.data['current_path'] = if directory.length > 0 && path_page_name.length > 0 then directory + '/' + path_page_name else directory end

    end
  end

  class VersionGenerator < Generator
    def generate(site)
    
    filtered_pages = site.pages.select { |page| ['landing'].include?(page.data['type']) } 
    site.pages.reject! { |page| page.data['type'] == 'ingredient' }
		#Filter start
      filtered_pages.each do |page|
        if page.data['directory'] then
         site.pages << VersionPage.new(site, site.source, page.data['type'], page.data['directory'], page)
        end
      end
      #Filter start

    end
  end
end
