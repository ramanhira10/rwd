# webpack

Webpack is a module bundler for JS applications. when webpack process any application, it inernally builds a dependency graph which maps every module the project needs and generates one or more bundles.

Any time one file depends on another, webpack treats this as a dependency.

Core concepts: (1) Entry (2) Output (3) Loaders (4) Plugins (5) Mode

Entry indicates which module webpack should use to begin building its internal dependency graph.

Output property tells webpack where to emit the bundles it creates and how to names these files.

Loaders allow webpack to process the any types of files and convert them into valid modules. These modules can be consumed by the application. Loaders have two properties (1) test (2) use

Plugins can be used to perform a range of tasks like bundle optimization, asset management and enabling the environment variables. To use the plugins, we need to require() it and add it to the plugins array. Most plugins are customizable through options.

By setting the mode parameter to either development, production or none, we can enable webpack's built-in optimizations that correspond to each environment. The default value is production.

Developers break programs into discrete chunks of functionality. These discrete chunks are called as modules.

A resolver (module resolution) is a library which helps in locating a module by its absolute path. 
