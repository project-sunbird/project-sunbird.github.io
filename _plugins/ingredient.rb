module Jekyll

  class IngredientTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.gsub(/[^a-z_\/0-9\-]/, "")
    end

    def render(context)
      # Register overrides
      context.registers[:ingredient] = {}
      context.registers[:ingredient_name] = @markup
      super

      # Include file and remove frontmatter
      file = read_file(context.registers[:site].in_source_dir("ingredients" + "/" + @markup + ".md")).gsub(/^---\n((?!---).*\n)*---/, "")
      partial = Liquid::Template.parse(file)
      context.stack do
        partial.render!(context)
      end
    end

    # This method allows to modify the file content by inheriting from the class.
    def read_file(file)
      File.read(file)
    end
  end

  class OverrideTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      context.registers[:ingredient][@markup] = super
      ""
    end
  end

  class SectionTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      if context.registers[:ingredient] and context.registers[:ingredient][@markup] then
        context.registers[:ingredient][@markup]
      else
        super
      end
    end
  end
end

Liquid::Template.register_tag('ingredient', Jekyll::IngredientTag)
Liquid::Template.register_tag('override', Jekyll::OverrideTag)
Liquid::Template.register_tag('section', Jekyll::SectionTag)
