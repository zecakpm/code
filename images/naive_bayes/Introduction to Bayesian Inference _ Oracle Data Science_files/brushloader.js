 function path()
    {
      var args = arguments,
      result = []
      ;
  for(var i = 0; i < args.length; i++)
      result.push(args[i].replace('@', ''));
      return result
    };
$(document).ready(function() {    
 
    SyntaxHighlighter.autoloader.apply(null, path(
      'applescript             https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/cbf2c988e6aefee4e790101cfd156c9f/shbrushapplescript.js',
      'actionscript3 as3       https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/5f64c2ab71c3b31a17cf6c0540154ae6/shbrushas3.js',
      'bash shell              https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/8e7a44d018299d599b11f61ee1aa7f1f/shbrushbash.js',
      'coldfusion cf           https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/9aa9164dda78f1449401d0631c0db46b/shbrushcoldfusion.js',
      'cpp c                   https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/41b08992881ff195408a676fd2e1cbcf/shbrushcpp.js',
      'c# c-sharp csharp       https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/8a2ff0b95a0e101d000ace2ae0a2907c/shbrushcsharp.js',
      'css                     https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/30876549e89c112b7250327089318ffc/shbrushcss.js',
      'delphi pascal           https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/6b51fa8864460af1b86c1d945d6440ba/shbrushdelphi.js',
      'diff patch pas          https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/22712056e15fcd47708eee093ae0c0c1/shbrushdiff.js',
      'erl erlang              https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/56d2c91433612baade6f014f408cc4ed/shbrusherlang.js',
      'groovy                  https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/85f530402bb152c7c652fa2f5cb393f0/shbrushgroovy.js',
      'java                    https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/18953b66d3f844752f0a89d89a297a93/shbrushjava.js',
      'jfx javafx              https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/a1017626271eac23e568f341211a0408/shbrushjavafx.js',
      'js jscript javascript   https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/ded1a87dc5f320195781ab29c2a3f5d9/shbrushjscript.js',
      'perl pl                 https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/9fa46516275bf66df08034dd6b465ad7/shbrushperl.js',
      'php                     https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/a0bbd2404764b6dcc77e4870f82b1b9d/shbrushphp.js',
      'text plain              https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/87ae2f642d09ea4829cb07d7adb384b8/shbrushplain.js',
      'py python               https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/2d699d430284b41f40dfc9e2cae32f75/shbrushpython.js',
      'ruby rails ror rb       https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/ab20521f37fb4a79c112b521c0376969/shbrushruby.js',
      'sass scss               https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/5fe1ca060bd179ddc73068e951a34862/shbrushsass.js',
      'scala                   https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/f8cb300825bdb9836d264477cca6c601/shbrushscala.js',
      'sql                     https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/01cd873cd93c48ad86bb4dcea4a01d81/shbrushsql.js',
      'vb vbnet                https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/d1a5bd1b07ab3ac24da57f8f3aaa9324/shbrushvb.js',
      'xml xhtml xslt html     https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/4790e630-263f-4339-828b-30ac369e19ac/File/f1e89f26368c4b1a67d00f61b7b1e857/shbrushxml.js'
    ));
    SyntaxHighlighter.all();
});