

### highlight

The recommended way to input fenced code blocks.

| Attribute | Usage
| ---: | ---
| **[language]** | [Everything you could ever want](http://pygments.org/docs/lexers/). You must specify a language or things will break.

```
{% highlight js %}
branch.link({
    channel: 'sms',
    feature: 'share',
    data: {
    "$ios_deepview": "default_template",
    "$android_deepview": "default_template"
    }
}, function(err, link) {
  if (!err) {
      console.log("Ready to share my " + link);
  }
});
{% endhighlight %}
```

### raw

If you want to print certain characters that Jekyll would typically attempt to parse, use this tag to pass through the literal values.

```
{% raw %}{{app}}{% endraw %}
```

### image

Use this tag to insert an image file.

| Attribute | Usage
| ---: | ---
| **[width]** | `full`, `3-quarters`, `2-thirds`, `half`, `third`, `quarter`, `actual`. **Default: `full`**
| **[position]** | `nofloat`, `right`, `left`, `center`. **Default: `nofloat`**
| **src** | URL for the image file
| **alt** | Alt text for the image

```
{% image src="http://cdn.branch.io/components/image.png" left quarter alt="Some Image: check it out!" %}
```

### ingredient

Import an ingredient by name from the `ingredients` directory.

| Attribute | Usage
| ---: | ---
| [name] | The path/to/filename (omitting `.md`) of the ingredient to import

```
{% ingredient quickstart-prerequisite %}{% endingredient %}
```

### section

Use to wrap content within an ingredient file, demarcating it as something that can be overridden when calling that ingredient.

| Attribute | Usage
| ---: | ---
| [name] | A name for the section you are defining

```
{% section header %}## Best Title Ever{% endsection %}
```

### override

Use to wrap content that will override a defined section in an ingredient you are calling.

| Attribute | Usage
| ---: | ---
| [name] | The name of the section you are overriding

```
{% override header %}## Even Better Title!{% endoverride %}
```

### tabs/tab

![](img/readme/tabs.png)

Define a set of switchable tabs, most commonly used to show both Objective-C and Swift examples for iOS.

| Attribute | Usage
| ---: | ---
| [name] | The name of the tab. Must not contain spaces.

```
{% tabs %}
{% tab objective-c %}
{% highlight objc %}

// Objective C code here

{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}

// Swift code here

{% endhighlight %}
{% endtab %}
{% endtabs %}
```

### getstarted

![](img/readme/getstarted.png)
![](img/readme/getstarted-title.png)
![](img/readme/getstarted-next.png)
![](img/readme/getstarted-next-title.png)

Used at the bottom of the Overview page section. Creates a button to the next section. Also customizable to create next buttons to next sections, or to custom sections with custom titles.

| Attribute | Usage
| ---: | ---
| **title** | Specify the text of the button. Will default to "Get Started:** Page Title - Section**" if left blank.
| **next** | Set to true to change "Get Started" to "Next". Button text is "Next:** Page Title - Section**".
| **next**, **title** | Specify the text of the next button as well as a page to link to.

```
{% getstarted %}{% endgetstarted %}

{% getstarted title="Get started with Deepviews" %}{% endgetstarted %}

{% getstarted next='true' %}{% endgetstarted %}

{% getstarted title='Deepviews' next='features/deepviews' %}{% endgetstarted %}
```



## Managing search results

To keep a page from showing up in search results:

1. Set `exclude_from_google_search` (above) to `true`, to block external search engines.
1. Add the filename of the page (omitting `.md`) to `js/search/excluded_files.json`, to block the internal search engine.

#### Important Notes
- Exclusion matching is currently imperfect: excluding a filename of `foo` will also exclude `foo-bar`.
- Pages will still be accessible by direct URL, and search engines may not respect the `noindex` setting. All content published should be considered as public.

## Best practices

- Never edit anything inside the `_site` directory. These are all generated files and are **always** overwritten.
- Ask before editing files elsewhere unless you're extremely confident that you know what you're doing.
- Use level two headers (H2) to structure content. For example, major steps in the Guide, or individual topics in Advanced and Support.
- Use numbered lists for smaller steps within the major steps if there are more than one.
- Use level five headers (H5) for FAQ questions. It looks just like bold text, but it helps with SEO.
- In general, use whatever heading level is next in line. If you get past H4, ask yourself probing questions.
- Keep page sections (`overview`, `guide`, `advanced`, `support`) contiguous for sanity, even though the conditional syntax doesn’t require it.
- Deep Link is **always two words**, in every form (noun, verb, adjective)
