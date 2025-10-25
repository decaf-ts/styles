### How to Use

- [Initial Setup](./tutorials/For%20Developers.md#_initial-setup_)
- [Installation](./tutorials/For%20Developers.md#installation)
- [Scripts](./tutorials/For%20Developers.md#scripts)
- [Linting](./tutorials/For%20Developers.md#testing)
- [CI/CD](./tutorials/For%20Developers.md#continuous-integrationdeployment)
- [Publishing](./tutorials/For%20Developers.md#publishing)
- [Structure](./tutorials/For%20Developers.md#repository-structure)
- [IDE Integrations](./tutorials/For%20Developers.md#ide-integrations)
  - [VSCode(ium)](./tutorials/For%20Developers.md#visual-studio-code-vscode)
  - [WebStorm](./tutorials/For%20Developers.md#webstorm)
- [Considerations](./tutorials/For%20Developers.md#considerations)




## Coding Principles

- group similar functionality in folders (analog to namespaces but without any namespace declaration)
- one class per file;
- one interface per file (unless interface is just used as a type);
- group types as other interfaces in a types.ts file per folder;
- group constants or enums in a constants.ts file per folder;
- group decorators in a decorators.ts file per folder;
- always import from the specific file, never from a folder or index file (exceptions for dependencies on other packages);
- prefer the usage of established design patters where applicable:
  - Singleton (can be an anti-pattern. use with care);
  - factory;
  - observer;
  - strategy;
  - builder;
  - etc;
