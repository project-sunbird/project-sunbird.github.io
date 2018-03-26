=begin
Animation tag takes three properties
- id
- path

{% animation path="/architecture.json" id="demo" %}

=end

module Jekyll
  class AnimationTag < Liquid::Tag
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
      
      @path = /path=['"]\S*['"]/.match(text).to_s
      @id = /id=['"](.*?)(?=[#'"])/.match(text).to_s

    end

    def render(context)
      paths = context.registers[:page]["url"].split('/')
      this_version_branch = paths[2]
      path = @path ? @path.gsub('path=', '').gsub("\"", ''): '#'
      #path = 'docs/'+this_version_branch+'/'+path
      id = @id ? @id.gsub('id=', '').gsub("\"", ''): 'demo'
      
      '<div id="'+id+'"></div><script> $(document).ready(function(){ var animData = { wrapper: document.getElementById("'+id+'"), animType: "svg", loop: true, prerender: true, autoplay: true, path: "'+path+'" }; var anim = bodymovin.loadAnimation(animData); });</script>'
      
    end
  end
end

Liquid::Template.register_tag('animation', Jekyll::AnimationTag)
