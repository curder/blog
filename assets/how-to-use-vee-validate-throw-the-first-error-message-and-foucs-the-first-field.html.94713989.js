import{r as p,o as e,c as o,b as n,a,F as c,e as l,d as t}from"./app.a3837e36.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=l(`<h1 id="\u83B7\u53D6\u7B2C\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\u5E76\u81EA\u52A8\u7126\u70B9\u5230\u8BE5\u8868\u5355\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7B2C\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\u5E76\u81EA\u52A8\u7126\u70B9\u5230\u8BE5\u8868\u5355\u5B57\u6BB5" aria-hidden="true">#</a> \u83B7\u53D6\u7B2C\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\u5E76\u81EA\u52A8\u7126\u70B9\u5230\u8BE5\u8868\u5355\u5B57\u6BB5</h1><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u7684\u9519\u8BEF\u4FE1\u606F\u5E76\u4E0D\u4EC5\u4EC5\u53EA\u662F\u663E\u793A\u9519\u8BEF\u4FE1\u606F\uFF0C\u5E38\u5E38\u9700\u8981\u83B7\u53D6\u9519\u8BEF\u4FE1\u606F\u63D0\u793A\u5F39\u51FA\u63D0\u793A\uFF0C\u8FD8\u9700\u8981\u5C06\u5149\u6807\u7126\u70B9\u805A\u7126\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u5B57\u6BB5\u4E0A\uFF0CVeeValidate \u9ED8\u8BA4\u5E76\u4E0D\u652F\u6301\u8FD9\u4E2A\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u5C0F\u6280\u5DE7\u5B8C\u6210\u3002</p><h2 id="\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a> \u7248\u672C</h2><ul><li>Vue <code>2.5.22</code></li><li>vue-validate <code>2.1.7</code></li></ul><h2 id="\u7F16\u5199-demoform-vue" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-demoform-vue" aria-hidden="true">#</a> \u7F16\u5199 DemoForm.vue</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>required|email<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-vv-validate-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change|blur<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-</span>
             <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ errors.first(&#39;email&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submitHandle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VeeValidate <span class="token keyword">from</span> <span class="token string">&quot;vee-validate&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeeValidate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;DemoForm&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">submitHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> hasError <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>errors<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token function-variable function">showFirstErrorMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>errors<span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C55\u793A\u7B2C\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F</span>
      <span class="token keyword">const</span> name <span class="token operator">=</span> hasError <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>errors<span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>field <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token function-variable function">setFocusOnErrorComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[name=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5149\u6807\u805A\u7126\u5728\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u5B57\u6BB5</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">showFirstErrorMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setFocusOnErrorComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;no error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><ul><li><p>VeeValidate \u7684\u9519\u8BEF\u5BF9\u8C61\u5728 Vue \u5B9E\u4F8B\u4E0B\uFF0C\u800C\u6240\u6709\u9519\u8BEF\u4FE1\u606F\u90FD\u5728 items \u6570\u7EC4\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5224\u65AD\u6570\u7EC4\u7684 length \u4F5C\u6765\u5224\u65AD\u662F\u5426\u5B58\u5728\u9519\u8BEF</p></li><li><p>\u5982\u679C\u5B58\u5728\u9519\u8BEF\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\u653E\u5728 items[0].msg \u5C5E\u6027</p></li><li><p>\u540E\u9762\u518D\u901A\u8FC7\u83B7\u53D6\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u5B57\u6BB5\u540D\u79F0\uFF0C\u5229\u7528 <code>this.$root.$el</code> \u7684 <code>querySelect()</code> \u83B7\u53D6\u5230\u8BE5\u5B57\u6BB5\uFF0C\u7136\u540E\u8C03\u7528 <code>focus()</code>\u65B9\u6CD5</p></li><li><p>\u82E5\u6709\u4EFB\u4F55 VeeValidate \u9A8C\u8BC1\u4E0D\u901A\u8FC7\uFF0C\u4F7F\u7528 <code>alert()</code> \u5F39\u51FA\u9519\u8BEF\u6D88\u606F\uFF0C\u5E76\u5C06\u5149\u6807\u7126\u70B9\u805A\u7126\u5230\u8F93\u5165\u6846\u4E0A</p></li></ul><h2 id="\u53C2\u8003\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u5730\u5740" aria-hidden="true">#</a> \u53C2\u8003\u5730\u5740</h2>`,8),k={href:"https://oomusou.io/vue/vee-validate/focus/",target:"_blank",rel:"noopener noreferrer"},m=t("\u5982\u4F55\u5C07 Focus \u81EA\u52D5\u8DF3\u5230 VeeValidate \u9A57\u8B49\u932F\u8AA4\u6B04\u4F4D ?"),b={href:"https://baianat.github.io/vee-validate/",target:"_blank",rel:"noopener noreferrer"},d=t("VeeValidate Docs");function g(h,v){const s=p("ExternalLinkIcon");return e(),o(c,null,[r,n("ul",null,[n("li",null,[n("a",k,[m,a(s)])]),n("li",null,[n("a",b,[d,a(s)])])])],64)}var y=u(i,[["render",g]]);export{y as default};
