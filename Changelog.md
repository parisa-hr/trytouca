# Changelog

## v1.8.0

### Server

- Added support for image visualization (#358)
- Added support for custom comparison rules (#410)
- Added support for server-sent events (#390, #398, #437, #439, #443)
- Added assumptions tab to test case page (#470)
- Improved support for visualizing long texts as data points (#489)
- Improved Redis connection logic (#379, #404, #405, #406, #407)
- Improved usage of Redis-backed queues (#403, #404, #408)
- Improved server install wizard (#442)
- Improved team creation workflow (#441)
- Improved server startup code (#471)
- Accept API key as a custom header for SDK auth (#491)
- Preserve filter preferences in web app (#486)
- Use edit distance for string comparison scores (#484)
- Removed HubSpot in-app chat widget (#389, #391)
- Store all objects in a single bucket (#345)
- Switch to using ESModules (#424)
- Collect user-agent upon submission (#502)
- Fix mime lookup function (#492)
- Account reset endpoint should not convert username to lowercase (#488)
- Web app should update password confirmation field on change (#487)
- Use same validators in suite settings page (#475)
- Update result component (#469)
- Refactor pages in home module (#440)
- Simplify activity type (#438)
- Publish event after each message comparison (#461)
- Support `MONGO_URI` environment variable (#434)
- Skip recipe to upgrade buckets on cloud instance (#413)
- Server should bust cache when suite subscription changes (#397)
- Upgrade helm to use v1.8 (#378)
- Enable trust proxy in cloud-hosted version (#374)
- Improved Flatbuffers binary schema (#369, #412)
- Allow user to submit sample data to empty team (#370)
- Improve endpoint for populating an account with results data (#368)
- Server should remove artifact when message is removed (#367)
- Improved logic for finding next version of a given suite (#361)
- Sort flattened values in comparison logic (#360)
- Report any invalid URLs in the server log (#348)
- Update object store status check (#346)
- Miscellaneous improvements (#380, #409, #493)

### Python CLI

- Added new CLI command: `server` (#462, #463, #465, #482, #483)
- Added new CLI command: `check` (#355, #364)
- Improved CLI command: `extract` (#480)
- Improved CLI command: `results` (#477)
- Improved CLI command: `test` (#428)
- Improved CLI startup time (#479)

### Python SDK

- Fixed reporting of array elements to follow their order of insertion (#372)
- Added test runner support programmatic declaration of test cases (#362)
- Added test runner should warn if test case has no captured data (#481)
- Improve test runner logic for handling configuration parameters (#473)
- Improved examples (#208, #354, #363)
- Miscellaneous improvements (#356, #359, #366, #453, #454, #460, #474)

### C++ SDK

- Improved test runner handling of configuration parameters (#490, #495, #496)
- Improved plugin for Catch2 test framework (#494)
- Improved API Reference documentation (#500)
- Improved examples (#415, #421, #449)
- Miscellaneous improvements (#340, #393, #450, #451, #452, #478, #501, #503)

### JavaScript SDK

- Publish library as pure ESM (#429, #432, #433)
- Added test runner support for capturing binary blobs and external files (#423)
- Added test runner support for programmatic declaration of test case (#422)
- Added test runner support for custom comparison rules (#414, #417)
- Improved test runner handling of configuration parameters (#436, #472)
- Improved test coverage (#430)
- Improve examples (#416, #435, #447)
- Switch from using Lerna to npm workspaces for JavaScript examples (#349, #371)
- Miscellaneous improvements (#431, #446)

### Java SDK

- Add support for custom comparison rules (#420)
- Improved examples (#418, #419)
- Miscellaneous improvements (#455, #456, #457, #459)

### Documentation Website

- Add instructions for using the helm chart (#468)
- Add instructions for disabling telemetry (#464)
- Add explanation about Touca Enterprise pricing (#375, #476)
- Improve self-hosting instructions (#467, #468)
- Miscellaneous improvements (#347, #351, #392, #396, #445, #466)

### Marketing Website

- Added new jobs page (#382, #383)
- Added new changelog posts (#352, #365, #373, #377)
- Updated pricing page (#353)
- Updated press kit (#387)
- Update brand assets (#384, #385)

### Build System

- Reduce docker image size (#388)
- Start containers as current user (#357)
- Enabled continuous deployment of Touca Cloud (#498)
- Improved self-hosting bash scripts (#395, #399, #400, #401, #458)
- Improved CI workflows (#394, #425, #426, #427, #485, #497, #499)
- Miscellaneous improvements (#344, #386, #402, #444, #448)

**Full Changelog**: https://github.com/trytouca/trytouca/compare/v1.7.0...v1.8.0

## v1.7.0

### Server

- use structured logs in cloud mode (#343)
- fix e2e setup code for clearing buckets (#342)
- fix race condition in message ingestion logic (#341)
- sort rows in account list (#325)
- continue applying mail server env vars (#322)
- remove deprecated fields from database (#321)
- use uuid from meta when reporting self-hosted installs (#320)
- add separate route to relay self-hoted installs (#319)
- change feedback processing route (#318)
- add route to relay telemetry (#316)
- update root url in cloud hosted mode (#313)
- skip serving static files in cloud-hosted mode (#312)
- do not create log file by default (#309)
- report perfect score when comparing empty messages (#307)
- fix status check logic in install script (#302)
- convert server to single docker image (#289)
- remove comparator component (#267)

### Documentation Website

- consolidate quickstart files (#328)
- add instructions for new CLI subcommand results (#326)

### Marketing Website

- publish new changelog (#327)
- publish new changelog (#315)

### Python SDK

- add new CLI sub-command `result` (#324)

### JavaScript SDK

- bump development version to v1.5.7 (#339)
- support configuration profiles (#338)
- bump development version to v1.5.6 (#337)
- add support for automatic version increments (#336)
- change default output directory (#333)
- enable running multiple workflows (#332)
- update dependencies (#329)

### Build System

- change public ecr repo for docker image (#310)
- update manifest and helm chart to use v1.7 (#304)
- bump server to v1.7.0 (#299)

**Full Changelog**: https://github.com/trytouca/trytouca/compare/v1.6.0...v1.7.0

## v1.6.0

### Server

- fix comparison of empty objects (#296)
- add new comparison logic (#294)
- add analytics for team member management (#290)
- reformat index html files (#284)
- create account during install wizard (#283)
- refactor analytics collection (#282)
- simplify analytics collection (#281)
- integrate customer.io (#276)
- add experimental comparison service (#266)

### Python SDK

- improved progress update logic in CLI subcommand zip (#291)
- refactor CLI subcommand zip (#288)
- add default src directory for CLI subcommand post (#287)
- refactor CLI subcommand post (#286)
- add help command (#279)
- remove init from api reference docs (#278)
- use rich text for config, profile, and plugin CLI commands (#277)
- use next batch if not specified (#274)
- bump development version to v1.5.8 (#268)
- add release notes for v1.5.7 (#265)

### C++ SDK

- enable deserializing results with no team slug (#285)

### Marketing Website

- publish new changelog (#292)
- remove intercom (#280)
- publish new changelog (#275)
- add intercom (#269)

### Build System

- remove unnecessary git fetch tags (#298)
- CI should build api when packages are changed (#297)
- CI should build comparator package (#295)
- change path to external docs (#273)
- remove CI step to deploy ops directory (#272)
- add build-ops job to CI (#271)
- add helm chart and manifest files for kubernetes deployment (#270)
- bump development version to v1.6.0 (#264)
- bump server to v1.5.0 (#263)

**Full Changelog**: https://github.com/trytouca/trytouca/compare/v1.5.0...v1.6.0