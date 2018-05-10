=begin
link tag takes three properties
- href
- title
- target [ blank ] (default: none)
- url [ relative | absolute ] (default: relative)
- class (default: none)

{% link href="/architecture" title="Web Url" class="link" blank relative %}

=end

module Jekyll
  class LinkTag < Liquid::Tag
    FILE_REGEX = /({{)(?<name>.*)(}})/i
    
    

    def replace(context, asset)
      m = FILE_REGEX.match(asset)
      unless m.nil?
        name = m[:name].split('.')
        page = context.environments.first[name[0]]
        str_replace = page.has_key?(name[1]) ? page[name[1]] : ''
        asset = asset.gsub(FILE_REGEX, str_replace)
        
      end
      asset
    end

    def initialize(tag_name, text, tokens)
      super
      
      @href = /href=['"]\S*['"]/.match(text).to_s
      @title = /title=['"](.*?)(?=[#'"])/.match(text).to_s
      @target = /\s(blank)\s/.match(text).to_s.strip!
      @url = /\s(relative|absolute)\s/.match(text).to_s.strip!
      @classes = /class=['"](.*?)(?=[#'"])/.match(text).to_s

    end

    def render(context)
      href = @href ? @href.gsub('href=', '').gsub("\"", ''): '#'
      paths = context.registers[:page]["url"].split('/')
      this_version_branch = paths[2]
      url = @url
      
      if url == 'relative'
		href = 'docs/'+this_version_branch+'/'+href
	  elsif url == 'absolute'
		href = href
	  else
		href = href
	  end
      
      
      title = @title ? @title.gsub('title=', '').gsub("\"", ''): 'Link'
      target = @target ? '_'+@target : ''
      classes = @classes ? @classes.gsub('class=', '').gsub("\"", '') : ''
      
      
      

      '<a href="'+href+'" class="'+classes+'" target="'+target+'" >'+title+'</a>'
    end
  end
end

Liquid::Template.register_tag('link', Jekyll::LinkTag)
