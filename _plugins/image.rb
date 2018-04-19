=begin
image tag takes five properties
- src
- position [ nofloat | right | left | center ] (default: nofloat)
- width [ full | 3-quarters | 2-thirds | half | third | quarter | actual ] (default: full)
- alt
- zoom ( default: no)

{% image src="/img/ingredients/configuring_the_dashboard/web_url.png" half center zoom alt="Web Url" %}
{% image src="http://sunbird.org/components/image.png" left quarter alt="Some Image: check it out!" %}
=end

module Jekyll
  class ImageTag < Liquid::Tag
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
      @position = /\s(nofloat|right|left|center)\s/.match(text).to_s.strip!
      @width = /\s(full|3-quarters|2-thirds|half|third|quarter|actual)\s/.match(text).to_s.strip!
      @zoom = /\s(zoom)\s/.match(text).to_s.strip!
      @src = /src=['"]\S*['"]/.match(text).to_s
      @alt = /alt=['"].*['"]/.match(text).to_s
    end

    def render(context)
      @WIDTH_MAP = {
        'full' => '100%',
        '3-quarters' => '75%',
        '2-thirds' => '66%',
        'half' => '50%',
        'third' => '33%',
        'quarter' => '25%',
        'actual' => ''
      }

      src = replace(context, @src)
      position = @position ? @position : 'nofloat'
      zoom = @zoom ? @zoom : ''
      image_width = @WIDTH_MAP[@width] || '100%'
      
      if zoom == 'zoom'
		'<figure class="zoomcover">
		<span class="zoomclose">X</span>
		<figcaption><strong>Note:</strong> Click on the image. It expands in a pop-up window. Place your cursor on the expanded image and move or scroll your mouse to zoom-in further.<br /> To return to the normal view, click on the image again, or click anywhere outside the pop-up window, or press the <strong>Esc</strong> key.</figcaption>
		<img '+src+' '+@alt+' class="plugin '+position+' '+zoom+'" '+'width="'+image_width+'"/>
		</figure>'
	  else
      '<a target="_blank" '+src.gsub('src', 'href')+'>
        <img '+src+' '+@alt+' class="plugin '+position+' '+zoom+'" '+'width="'+image_width+'"/>
      </a>'
      end
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::ImageTag)
