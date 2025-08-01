# @milkdown/transformer

## 7.15.2

### Patch Changes

- c8fcf84: Milkdown patch version release.

  ## Fix
  - fix: 🐛 list component mount logic on safari (#2042)
  - fix: 🐛 html in blockquote error (#2041)
  - fix: 🐛 improve input rule of strong mark (#2036)
  - fix: 🐛 trikethrough matching on intra-word tilde (#2031)
  - fix: 🐛 emphasis matching on intra-word underscores (#2029)
  - fix: 🐛 copy link event binding error (#2019)

  ## Refactor
  - refactor: 💡 improve implementation of table dnd (#2017)

  ## Test
  - test: 💍 add test case for trim spaces (#2035)
  - test: 💍 add e2e for table (#2023)

- Updated dependencies [c8fcf84]
  - @milkdown/exception@7.15.2
  - @milkdown/prose@7.15.2

## 7.15.1

### Patch Changes

- 547cb65: Milkdown patch version release.

  ## Fix
  - fix: 🐛 CJK heading id (#2012)
  - fix: 🐛 prop copyIcon type error (#2010)

- Updated dependencies [547cb65]
  - @milkdown/exception@7.15.1
  - @milkdown/prose@7.15.1

## 7.15.0

### Minor Changes

- 941d1ba: Milkdown minor release.

  ## Feat
  - feat: 🎸 support extend a extended schema (#2001)
  - feat: 🎸 reduce link preview delay
  - feat: 🎸 new keymap manager (#1988)
  - feat: 🎸 support copy to clipboard for code block (#1944)

  ## Fix
  - fix: 🐛 emoji crash if not available in twemoji (#1999)
  - fix: 🐛 table shortcut priority (#1998)
  - fix: 🐛 should hide placeholder in readonly mode (#1994)
  - fix: 🐛 vue test warning (#1979)
  - fix: 🐛 flaky unit test

  ## Docs
  - docs: ✏️ update documentations for components (#2003)

### Patch Changes

- Updated dependencies [941d1ba]
  - @milkdown/exception@7.15.0
  - @milkdown/prose@7.15.0

## 7.14.0

### Minor Changes

- 98178f3: Milkdown minor release.

  ## Feat
  - feat: 🎸 add some useful macros (#1975)
  - feat: 🎸 expose block handle config for crepe (#1974)

  ## Ci
  - ci: 🎡 fix flaky test

### Patch Changes

- Updated dependencies [98178f3]
  - @milkdown/exception@7.14.0
  - @milkdown/prose@7.14.0

## 7.13.2

### Patch Changes

- 7c7de47: Milkdown patch version release.

  ## Fix
  - fix: 🐛 overflow codemirror scroll to top (#1967)
  - fix: 🐛 polynomial-redos (#1965)
  - fix: 🐛 debounce and throttle not call as expected (#1961)

  ## Chore
  - chore: bump up oxlint version to v1 (#1962)

  ## Ci
  - ci: 🎡 enable codeql
  - ci: 🎡 fix flaky vitest (#1960)

- Updated dependencies [7c7de47]
  - @milkdown/exception@7.13.2
  - @milkdown/prose@7.13.2

## 7.13.1

### Patch Changes

- 35c3a33: Milkdown patch version release.

  ## Fix
  - fix: 🐛 blockConfig not found error (#1958)

- Updated dependencies [35c3a33]
  - @milkdown/exception@7.13.1
  - @milkdown/prose@7.13.1

## 7.13.0

### Minor Changes

- 327e89a: Milkdown minor release.

  ## Feat
  - feat: 🎸 improve the block menu config api (#1953)
  - feat: 🎸 add commands to update block and range (#1952)
  - feat: 🎸 expose builder in toolbar config (#1950)
  - feat: 🎸 add selected command (#1947)
  - feat: 🎸 add toggle link command (#1946)
  - feat: 🎸 add latex toggle command (#1945)

  ## Docs
  - docs: ✏️ update readme

  ## Refactor
  - refactor: 💡 use group builder to build toolbar (#1949)

  ## Test
  - test: 💍 fix flaky e2e

  ## Ci
  - ci: 🎡 wrong playwright test result path

### Patch Changes

- Updated dependencies [327e89a]
  - @milkdown/exception@7.13.0
  - @milkdown/prose@7.13.0

## 7.12.1

### Patch Changes

- 9767b9b: Milkdown patch version release.

  ## Fix
  - fix: 🐛 crepe rollup wrong config

- Updated dependencies [9767b9b]
  - @milkdown/exception@7.12.1
  - @milkdown/prose@7.12.1

## 7.12.0

### Minor Changes

- 9cb2a8b: Milkdown minor version release.

  ## Feat
  - feat: 🎸 support crepe builder (#1926, #1928)

  ## Fix
  - fix: 🐛 should focus editor when clicking todo list (#1929)

  ## Chore
  - chore: add vercel oss program badge in readme

  ## Refactor
  - refactor: 💡 use string instead of function for icons (#1927)

### Patch Changes

- Updated dependencies [9cb2a8b]
  - @milkdown/exception@7.12.0
  - @milkdown/prose@7.12.0

## 7.11.1

### Patch Changes

- 395425b: Milkdown patch version release.

  ## Fix
  - fix: 🐛 missing style for codemirror search panel (#1910)
  - fix: 🐛 should also export crepe reset css (#1909)

  ## Docs
  - docs: ✏️ add api reference for crepe editor (#1908)

- Updated dependencies [395425b]
  - @milkdown/exception@7.11.1
  - @milkdown/prose@7.11.1

## 7.11.0

### Minor Changes

- f890c3e: Milkdown minor version release.

  ## Feat
  - feat: 🎸 add inline support for insert macro (#1901)
  - feat: add selection change event in listern plugin (#1900)

  ## Fix
  - fix: 🐛 slashMenuTextLabel config attribute (#1904)
  - fix: possible empty code language attribute (#1898)

### Patch Changes

- Updated dependencies [f890c3e]
  - @milkdown/exception@7.11.0
  - @milkdown/prose@7.11.0

## 7.10.5

### Patch Changes

- ba00e24: Milkdown patch version release.

  ## Docs
  - docs: add deep wiki link in readme

  ## Fix
  - fix: 🐛 set readonly mode before editor loaded will cause error (#1890)

  ## Refactor
  - refactor: 💡 use clipboard serialized from prosemirror (#1890)

- Updated dependencies [ba00e24]
  - @milkdown/exception@7.10.5
  - @milkdown/prose@7.10.5

## 7.10.4

### Patch Changes

- bf55842: Milkdown patch version release.

  ## Fix
  - fix: 🐛 readonly mode for code block component (#1886)
  - fix: 🐛 check max valid position when updating slash menu (#1885)

- Updated dependencies [bf55842]
  - @milkdown/exception@7.10.4
  - @milkdown/prose@7.10.4

## 7.10.3

### Patch Changes

- 36f9673: Milkdown patch version release.

  ## Fix
  - fix: 🐛 should hide toolbar when link tooltip is shown (#1871)
  - fix: 🐛 nord theme in nuxt (#1869)

- Updated dependencies [36f9673]
  - @milkdown/exception@7.10.3
  - @milkdown/prose@7.10.3

## 7.10.2

### Patch Changes

- 231c534: Milkdown patch version release.

  ## Fix
  - fix: 🐛 slash menu icon style (#1862)
  - fix: 🐛 crepe slash menu and toolbar z-index (#1864)

  ## Chore
  - chore: improve comments

  ## Docs
  - docs: ✏️ add api docs folder (#1860)

- Updated dependencies [231c534]
  - @milkdown/exception@7.10.2
  - @milkdown/prose@7.10.2

## 7.10.1

### Patch Changes

- 02a756a: Milkdown patch version release.

  ## Fix
  - fix: missing command chain tsdoc (#1857)

- Updated dependencies [02a756a]
  - @milkdown/exception@7.10.1
  - @milkdown/prose@7.10.1

## 7.10.0

### Minor Changes

- 3296822: Milkdown minor version release.

  ## Feat
  - feat: 🎸 add command inline and chain (#1852)

  ## Fix
  - fix: 🐛 list item component should be focused when created (#1854)

### Patch Changes

- Updated dependencies [3296822]
  - @milkdown/exception@7.10.0
  - @milkdown/prose@7.10.0

## 7.9.1

### Patch Changes

- fa3be68: Milkdown patch version release.

  ## Fix
  - fix: empty table row (#1849)
  - fix: empty line in list (#1848)

  ## Chore
  - chore: cleanup unused dependencies (#1846)
  - chore: bump up vite version to v6.3.4 [SECURITY] (#1844)
  - chore: bump up pnpm to v10.10.0 (#1837)

  ## Docs
  - docs: update jetbrains brand links in readme (#1840)

- Updated dependencies [fa3be68]
  - @milkdown/exception@7.9.1
  - @milkdown/prose@7.9.1

## 7.9.0

### Minor Changes

- dc7f7ae: Milkdown minor release.

  ## Feat
  - feat: 🎸 enable floating-ui's shift plugin for tooltip by default (#1800), thanks to @KBHertzog.

  ### Security
  - feat: 🎸 santinize url input (#1808)
  - feat: 🎸 add validate props for schema (#1810)

  ### Vue Migration

  If you have a custom stylesheet, you'll need to change the selectors from `milkdown-xxx` to `.milkdown-xxx` because we don't use webcomponents anymore.

  Here's a list of all the class-based selectors currently in use that you should use instead of web components:
  - `.milkdown-code-block` - For code blocks
  - `.milkdown-image-block` - For image blocks
  - `.milkdown-image-inline` - For inline images
  - `.milkdown-block-handle` - For block handles
  - `.milkdown-slash-menu` - For slash commands menu
  - `.milkdown-toolbar` - For the editor toolbar
  - `.milkdown-link-preview` - For link previews
  - `.milkdown-link-edit` - For link editing
  - `.milkdown-latex-inline-edit` - For LaTeX editing
  - `.milkdown-table-block` - For tables
  - `.milkdown-list-item-block` - For list items
  - feat: 🎸 migrate toolbar to vue (#1827)
  - feat: 🎸 migrate latex to vue (#1826)
  - feat: 🎸 migrate slash menu to vue (#1825)
  - feat: 🎸 migrate drag handle component to vue (#1824)
  - feat: 🎸 migrate table component to vue (#1821)
  - feat: 🎸 migrate list item component to vue (#1820)
  - feat: 🎸 migrate link tooltip to vue (#1807)
  - feat: 🎸 migrate code block to vue (#1806)
  - feat: 🎸 migrate image inline to vue (#1804)
  - feat: 🎸 migrate image block to vue (#1803)

  ### Dev
  - feat: 🎸 workspace generator (#1795)

  ## Fix
  - fix: 🐛 missing table component cleanup (#1823)
  - fix: 🐛 crepe list item cursor style
  - fix: 🐛 crepe vue unmount error (#1818)
  - fix: 🐛 preserve empty line exception and behavior (#1814)

  ## Chore
  - chore: 🤖 migrate playground to vue (#1828)
  - chore: 🤖 bring back build scripts (#1822)
  - chore: 🤖 bump up prosemirror tables version
  - chore: 🤖 rollup jsx files (#1819)
  - chore: 🤖 bump up pnpm to v10.8.1 (#1815)
  - chore: 🤖 bump up vite version to v6.2.6 [SECURITY] (#1802)
  - chore: 🤖 fix publish
  - chore: 🤖 remove nx (#1794)
  - chore: 🤖 remove packges level dev pack (#1790)
  - chore: 🤖 update prettier config
  - chore: 🤖 fix workspace version
  - chore: 🤖 optimize build script (#1788)

  ## Ci
  - ci: 🎡 add codegen in fix ci (#1805)
  - ci: 🎡 add eslint to lint errors not supported by oxlint (#1812)

### Patch Changes

- Updated dependencies [dc7f7ae]
  - @milkdown/exception@7.9.0
  - @milkdown/prose@7.9.0

## 7.8.0

### Minor Changes

- eeb7c58: Milkdown minor version release.

  ## Feat
  - feat: 🎸 add bike-style virtual cursor (#1770)

  ## Fix
  - fix: crepe inline code padding
  - fix: 🐛 google doc paste (#1773)
  - fix: 🐛 should not display slash menu if has following chars (#1772)
  - fix: remove inline code mark inclusive config (#1771)

  ## Chore
  - chore: remove deprecated diagram package (#1786)

### Patch Changes

- Updated dependencies [eeb7c58]
  - @milkdown/exception@7.8.0

## 7.7.0

### Minor Changes

- 58e628c: Milkdown minor release.

  ## Feat
  - feat: add preserve empty line plugin (#1765)
  - feat: check for isImageBlockEnabled and isTableEnabled (#1761)

  ## Fix
  - fix: 🐛 backward select text in table cell (#1766)
  - fix: table enter and minimal rows (#1738)

  ## Chore
  - chore: update readme

  ## Style
  - style: 💄 enable more oxlint rules (#1767)

### Patch Changes

- Updated dependencies [58e628c]
  - @milkdown/exception@7.7.0

## 7.6.4

### Patch Changes

- fbd3cf7: Milkdown patch version release.

  ## Fix
  - fix: multi block handle (#1731)
  - fix: should not support blockquote in list (#1730)
  - fix: image upload button stop working when selected (#1718)
  - fix: should disable image resizer for readonly mode (#1717)

  ## Chore
  - chore: bump up refractor version to v5 (#1727)
  - chore: bump up shiki version to v3 (#1691)

  ## Build
  - build: disable minification #1709 (#1710)

- Updated dependencies [fbd3cf7]
  - @milkdown/exception@7.6.4

## 7.6.3

### Patch Changes

- 288bbed: Release milkdown patch version.

  ## Feat
  - feat: add math in slash menu (#1686)
  - feat: 🎸 add root option for tooltip,slash,block (#1681)

  ## Fix
  - fix: remove slugify for performance consideration (#1680)
  - fix: react and vue destroy when using crepe (#1679)
  - fix: allow running in insecure context (#1666)

  ## Chore
  - chore: Lock file maintenance (#1685)
  - chore: bump up pnpm to v10.4.1 (#1684)
  - chore: bump up all non-major dependencies to v20.4.4 (#1678)
  - chore: bump up pnpm to v10.4.0 (#1677)
  - chore: bump up all non-major dependencies to v20.4.3 (#1672)
  - chore: update readme
  - chore: use short nanoid (#1668)
  - chore: bump up pnpm to v10.3.0 (#1663)
  - chore: Lock file maintenance (#1661)
  - chore: bump up all non-major dependencies (#1660)
  - chore: bump up pnpm/action-setup action to v4.1.0 (#1659)
  - chore: bump up all non-major dependencies (#1658)
  - chore: bump up vitest version to v3.0.5 [SECURITY] (#1656)
  - chore: bump up pnpm to v10 (#1654)
  - chore: bump up pnpm to v9.15.5 (#1652)
  - chore: Lock file maintenance (#1653)

- Updated dependencies [288bbed]
  - @milkdown/exception@7.6.3

## 7.6.2

### Patch Changes

- 061f740: Release milkdown patch version.

  ## Feat
  - feat: make integrations accept crepe editor (#1649)
  - feat: add crepe ctx to make users can access crepe from editor (#1648)

  ## Fix
  - fix: 🐛 incompatibility between Promise.resolve and angular change detection mechanism (#1647)
  - fix: 🐛 remark transform error when no code block lang (#1642)

  ## Chore
  - chore: bump up tailwindcss version to v4 (#1638)
  - chore: bump up all non-major dependencies to v20.4.0 (#1646)
  - chore: Lock file maintenance (#1645)
  - chore: bump up all non-major dependencies to v20.3.3 (#1641)
  - chore: bump up vite version to v6.0.9 [SECURITY] (#1636)
  - chore: bump up shiki version to v2 (#1634)
  - chore: Lock file maintenance (#1633)
  - chore: bump up all non-major dependencies to v20.3.2 (#1632)
  - chore: bump up katex version to v0.16.21 [SECURITY] (#1631)

- Updated dependencies [061f740]
  - @milkdown/exception@7.6.2

## 7.6.1

### Patch Changes

- @milkdown/exception@7.6.1

## 7.6.0

### Minor Changes

- 9421082: Minor version release for milkdown.

  ## Feat
  - feat: 🎸 add `on` api for crepe (#1622)
  - feat: add markdown inspector in storybook (#1619)
  - feat: add latex feature for crepe (#1613)

  ## Chore
  - chore: use kit in integrations (#1626)
  - chore: bump prosemirror versions (#1621)
  - chore: remove math plugin since we provides latex in crepe (#1617)
  - chore: remove husky install since it's deprecated (#1616)

### Patch Changes

- Updated dependencies [9421082]
  - @milkdown/exception@7.6.0

## 7.5.9

### Patch Changes

- a3dde0c: Enable image proxy.
- Updated dependencies [a3dde0c]
  - @milkdown/exception@7.5.9

## 7.5.8

### Patch Changes

- db4ec60: Bug fixes and api improvements.

  # Crepe
  - Add image proxy config.
  - Fix link preview text not properly truncated.
  - Fix list item unstable selection.
  - Fix button types.
  - Reset index when slash menu out of bound.

  # Core
  - Prevent duplicate ids in the editor.
  - Allow options to floating ui.
  - Add undoable input rules.

- Updated dependencies [db4ec60]
  - @milkdown/exception@7.5.8

## 7.5.0

### Minor Changes

- be28e7b: All in one kit package and crepe config.
  - Add all-in-one kit package.
  - Add crepe config for:
    - Widgets texts
    - Icons
  - Add new frame theme for crepe.
  - Add new table component.
  - Add GFM support for crepe.

### Patch Changes

- Updated dependencies [be28e7b]
  - @milkdown/exception@7.5.0

## 7.4.0

### Minor Changes

- 849669b: ## Headless components and Crepe polish

  ### Feature

  #### Migrate from tippy to floating ui
  - feat: replace tippy with floating ui in plugin block in https://github.com/Milkdown/milkdown/pull/1356
  - feat: migrate tippy to floating ui in plugin slash in https://github.com/Milkdown/milkdown/pull/1375
  - feat: add offset for floating ui in https://github.com/Milkdown/milkdown/pull/1384
  - feat: migrate to floating ui in plugin tooltip in https://github.com/Milkdown/milkdown/pull/1373

  #### Components Improvements
  - feat: optimize code block behavior in https://github.com/Milkdown/milkdown/pull/1388
  - fix: image caption bug in https://github.com/Milkdown/milkdown/pull/1382
  - fix: list item block should respect readonly mode in https://github.com/Milkdown/milkdown/pull/1339
  - feat: remove styles in components in https://github.com/Milkdown/milkdown/pull/1346
  - feat: optimize block handle in https://github.com/Milkdown/milkdown/pull/1355
  - fix: slash menu scroll behavior in https://github.com/Milkdown/milkdown/pull/1386

  #### Crepe Improvements
  - feat: add better readonly support for crepe in https://github.com/Milkdown/milkdown/pull/1322
  - feat: add components in storybook in https://github.com/Milkdown/milkdown/pull/1323
  - fix: crepe destroy throw an error in https://github.com/Milkdown/milkdown/pull/1305
  - fix: improve styles for crepe in https://github.com/Milkdown/milkdown/pull/1306
  - feat: optimize ui for crepe theme in https://github.com/Milkdown/milkdown/pull/1383
  - feat: polish crepe image component ui in https://github.com/Milkdown/milkdown/pull/1385
  - feat: better drop cursor for crepe in https://github.com/Milkdown/milkdown/pull/1378
  - feat: migrate crepe theme to pure css in https://github.com/Milkdown/milkdown/pull/1358

  #### Misc
  - docs: update default config reference by @emmanuel-ferdman in https://github.com/Milkdown/milkdown/pull/1320
  - chore: remove copyright in https://github.com/Milkdown/milkdown/pull/1321
  - test: add list item block in stories in https://github.com/Milkdown/milkdown/pull/1338
  - chore: add inline image block in storybook in https://github.com/Milkdown/milkdown/pull/1340
  - chore: add link tooltip in storybook in https://github.com/Milkdown/milkdown/pull/1341
  - chore: add listener plugin in storybook in https://github.com/Milkdown/milkdown/pull/1342
  - fix: image block style offset in storybook in https://github.com/Milkdown/milkdown/pull/1345
  - chore: 🤖 adjust script names in https://github.com/Milkdown/milkdown/pull/1348
  - chore: adjust e2e folder in https://github.com/Milkdown/milkdown/pull/1354
  - chore: adjust folders in https://github.com/Milkdown/milkdown/pull/1357
  - chore: improve styles in story book in https://github.com/Milkdown/milkdown/pull/1359
  - fix: ordered list paste becomes unordered list in https://github.com/Milkdown/milkdown/pull/1368
  - feat: optimize storybook in https://github.com/Milkdown/milkdown/pull/1369
  - ci: use core pack in https://github.com/Milkdown/milkdown/pull/1387

### Patch Changes

- Updated dependencies [849669b]
  - @milkdown/exception@7.4.0

## 7.3.6

### Patch Changes

- 151b789: Bug fix
- Updated dependencies [151b789]
  - @milkdown/exception@7.3.6

## 7.3.5

### Patch Changes

- c2a5bcb: Resolve the tippy warning
- Updated dependencies [c2a5bcb]
  - @milkdown/exception@7.3.5

## 7.3.4

### Patch Changes

- 2bca917: Fix some bugs and prepare for crepe editor.
- Updated dependencies [2bca917]
  - @milkdown/exception@7.3.4

## 7.3.3

### Patch Changes

- 2770d92: Add inline image component and link tooltip component
- Updated dependencies [2770d92]
  - @milkdown/exception@7.3.3

## 7.3.2

### Patch Changes

- 5c4a7571: Fix package issues
- Updated dependencies [5c4a7571]
  - @milkdown/exception@7.3.2

## 7.3.1

### Patch Changes

- f199e63f: Add code block and list item block in components
- Updated dependencies [f199e63f]
  - @milkdown/exception@7.3.1

## 7.3.0

### Minor Changes

- 971ff4c0: Improvement features and bug fix.

  Add support for remark plugin config. (#1085)

  Add support for escape character in inline sync plugin. (#1094)

  Fix missing type error in theme nord. (#1095)

### Patch Changes

- Updated dependencies [971ff4c0]
  - @milkdown/exception@7.3.0

## 7.2.4

### Patch Changes

- 37b2f22a: Bug fix.

  Expose trigger key for slash plugin. (#1018)

  Fix heading commands for h4-h6. (#1033)

  Rollback to toggle mark command. (#1035)

  Fix the issue that commands not work for multi editor instances. (#1038)

  Fix the issue that marks won't be extends when pasting pure text from HTML. (#1040)

  Bump prosemirror versions. (#1041)

- Updated dependencies [37b2f22a]
  - @milkdown/exception@7.2.4

## 7.2.3

### Patch Changes

- 84fce58e: Optimize the behavior of inline sync plugin.
- Updated dependencies [84fce58e]
  - @milkdown/exception@7.2.3

## 7.2.2

### Patch Changes

- 01174470: Bug fixes and small improvements.

  Add gapcursor css in prose package. (3d0832e)
  Add option for `getContent` in slash provider. (6c47b3d)
  Add a command to lift first lit item. (#1003)

- Updated dependencies [01174470]
  - @milkdown/exception@7.2.2

## 7.2.1

### Patch Changes

- df03a2cb: Bug fix

  Fix commands not working for multiple editors. #977
  Fix inline math conflicts with inline sync plugin. #983

- Updated dependencies [df03a2cb]
  - @milkdown/exception@7.2.1

## 7.2.0

### Minor Changes

- f5e00085: Add inspector and telemetry.

### Patch Changes

- 45cd3c76: Fix circular deps in commands plugin.
- c69f3076: Rename inspection to telemetry
- 10139088: Fix incorrect system plugin store ref.
- 828cceb9: Add support for editor inspector #960
- Updated dependencies [f5e00085]
- Updated dependencies [45cd3c76]
- Updated dependencies [c69f3076]
- Updated dependencies [10139088]
- Updated dependencies [828cceb9]
  - @milkdown/exception@7.2.0

## 7.1.2-next.3

### Patch Changes

- 10139088: Fix incorrect system plugin store ref.
- Updated dependencies [10139088]
  - @milkdown/exception@7.1.2-next.3

## 7.1.2-next.2

### Patch Changes

- c69f3076: Rename inspection to telemetry
- Updated dependencies [c69f3076]
  - @milkdown/exception@7.1.2-next.2

## 7.1.2-next.1

### Patch Changes

- 45cd3c76: Fix circular deps in commands plugin.
- Updated dependencies [45cd3c76]
  - @milkdown/exception@7.1.2-next.1

## 7.1.2-next.0

### Patch Changes

- 828cceb9: Add support for editor inspector #960
- Updated dependencies [828cceb9]
  - @milkdown/exception@7.1.2-next.0
  - @milkdown/prose@7.1.2-next.0

## 7.1.1

### Patch Changes

- f4aaf467: Use slugify to create id for heading nodes
  Fix inline sync plugin causes unneeded changes #924
  Upgrade typescript version to 5 #943
  Add hard break leafText #944
- Updated dependencies [f4aaf467]
  - @milkdown/exception@7.1.1

## 7.1.0

### Minor Changes

- 4a60eae7: Add support for HTML nodes.
  Export css files from prosemirror packages.

### Patch Changes

- Updated dependencies [4a60eae7]
  - @milkdown/exception@7.1.0

## 7.0.1

### Patch Changes

- 52dcbbe8: Bug fix.
- Updated dependencies [52dcbbe8]
  - @milkdown/exception@7.0.1

## 7.0.0

### Major Changes

- 069d719b: Milkdown v7.
  - The editor becomes a first-class headless component.
  - Factory plugins are deprecated and replaced by composable plugins.
  - Runtime plugin toggle.
  - Universal widget plugins.
  - Better Vue and React support.
  - API documentation.

### Patch Changes

- 46010daf: Fix bugs of async composables.
- 2ad4b566: Fix some bugs for rc version.
- ff8a568b: Fix issues in nord-theme and block-plugin.
- 76bed778: Align the API of block plugin with slash and tooltip.
- fc2f4f94: Bug fix version
- cbe8b734: Upgrade prosemirror version and rename collab plugin
- Updated dependencies [46010daf]
- Updated dependencies [2ad4b566]
- Updated dependencies [ff8a568b]
- Updated dependencies [76bed778]
- Updated dependencies [fc2f4f94]
- Updated dependencies [cbe8b734]
- Updated dependencies [069d719b]
  - @milkdown/exception@7.0.0

## 7.0.0-next.6

### Patch Changes

- cbe8b734: Upgrade prosemirror version and rename collab plugin
- Updated dependencies [cbe8b734]
  - @milkdown/exception@7.0.0-next.6

## 7.0.0-next.5

### Patch Changes

- 76bed778: Align the API of block plugin with slash and tooltip.
- Updated dependencies [76bed778]
  - @milkdown/exception@7.0.0-next.5

## 7.0.0-next.4

### Patch Changes

- 46010daf: Fix bugs of async composables.
- Updated dependencies [46010daf]
  - @milkdown/exception@7.0.0-next.4

## 7.0.0-next.3

### Patch Changes

- ff8a568b: Fix issues in nord-theme and block-plugin.
- Updated dependencies [ff8a568b]
  - @milkdown/exception@7.0.0-next.3

## 7.0.0-next.2

### Patch Changes

- fc2f4f94: Bug fix version
- Updated dependencies [fc2f4f94]
  - @milkdown/exception@7.0.0-next.2

## 7.0.0-next.1

### Patch Changes

- 2ad4b566: Fix some bugs for rc version.
- Updated dependencies [2ad4b566]
  - @milkdown/exception@7.0.0-next.1

## 7.0.0-next.0

### Major Changes

- 069d719b: Pre-release for milkdown v7.

### Patch Changes

- Updated dependencies [069d719b]
  - @milkdown/exception@7.0.0-next.0
  - @milkdown/prose@7.0.0-next.0

## 6.5.4

### Patch Changes

- b4003d9: Fix bugs and make some small improvements.
- Updated dependencies [b4003d9]
  - @milkdown/exception@6.5.4

## 6.5.3

### Patch Changes

- d5c337d: Ux improvements and bug fix.
- Updated dependencies [d5c337d]
  - @milkdown/exception@6.5.3

## 6.5.2

### Patch Changes

- 3cb8683: Fix floating widget positions by @iHaPBoy
- Updated dependencies [3cb8683]
  - @milkdown/exception@6.5.2

## 6.5.0

### Minor Changes

- 77ae1d3: Removable plugins, editor status, table inputrule and `injectSlices` factory options.

### Patch Changes

- Updated dependencies [77ae1d3]
  - @milkdown/exception@6.5.0

## 6.4.1

### Patch Changes

- c1fd2fe2: Bug fix for android list and prism SSR.
- Updated dependencies [c1fd2fe2]
  - @milkdown/exception@6.4.1

## 6.4.0

### Minor Changes

- cd6a6139: Inline sync plugin, vscode paste support, and new internal ctx.

### Patch Changes

- Updated dependencies [cd6a6139]
  - @milkdown/exception@6.4.0

## 6.3.2

### Patch Changes

- 161d7104: Fix bug of plugin-menu, react strict mode and muptiple editors.
- Updated dependencies [161d7104]
  - @milkdown/exception@6.3.2

## 6.3.1

### Patch Changes

- 8478db7a: Fix bug for memory leak, hardbreak and em to px.
- Updated dependencies [8478db7a]
  - @milkdown/exception@6.3.1

## 6.3.0

### Minor Changes

- d3b2bd9d: https://github.com/Saul-Mirone/milkdown/milestone/4

### Patch Changes

- Updated dependencies [d3b2bd9d]
  - @milkdown/exception@6.3.0

## 6.2.0

### Minor Changes

- 26afcdaf: New react and vue API, custom heading id, prosemirror upgrade, and async composable API.

### Patch Changes

- Updated dependencies [26afcdaf]
  - @milkdown/exception@6.2.0

## 6.1.5

### Patch Changes

- ccf70357: Fix extended factories cannot inject slices
- Updated dependencies [ccf70357]
  - @milkdown/exception@6.1.5

## 6.1.4

### Patch Changes

- d866dded: Fix bugs for clipboard plugin and i18 support
- Updated dependencies [d866dded]
  - @milkdown/exception@6.1.4

## 6.1.3

### Patch Changes

- b5bb4c3f: Fix bugs: inline nodes cursor, theme & emoji for next/nuxt, hardbreak only paragraph.
- Updated dependencies [b5bb4c3f]
  - @milkdown/exception@6.1.3

## 6.1.2

### Patch Changes

- 2c651a96: Fix bugs for collab editing and theme.
- Updated dependencies [2c651a96]
  - @milkdown/exception@6.1.2

## 6.1.1

### Patch Changes

- 1b52931a: Fix input chip bug
- Updated dependencies [1b52931a]
  - @milkdown/exception@6.1.1

## 6.1.0

### Minor Changes

- 1daf87dd: Improve support for collaborative editing.

### Patch Changes

- Updated dependencies [1daf87dd]
  - @milkdown/exception@6.1.0

## 6.0.2

### Patch Changes

- e956c5e3: Fix bugs for collaboration mode
- Updated dependencies [e956c5e3]
  - @milkdown/exception@6.0.2

## 6.0.1

### Patch Changes

- 08a442de: Fix peer dependency error
- Updated dependencies [08a442de]
  - @milkdown/exception@6.0.1

## 6.0.0

### Major Changes

- 00dcdee9: Release milkdown@6
- 4c2846d5: Release milkdown@v6 next.

### Patch Changes

- e27e7e62: Improve UX and API.
- Updated dependencies [e27e7e62]
- Updated dependencies [00dcdee9]
- Updated dependencies [4c2846d5]
  - @milkdown/exception@6.0.0

## 6.0.0-next.1

### Patch Changes

- e27e7e62: Improve UX and API.
- Updated dependencies [e27e7e62]
  - @milkdown/exception@6.0.0-next.1

## 6.0.0-next.0

### Major Changes

- 4c2846d5: Release milkdown@v6 next.

### Patch Changes

- Updated dependencies [4c2846d5]
  - @milkdown/exception@6.0.0-next.0
  - @milkdown/prose@6.0.0-next.0

## 5.5.0

### Minor Changes

- d79264e6: Prism plugin now can be configured. And bug fixes with UX optimization.

### Patch Changes

- Updated dependencies [d79264e6]
  - @milkdown/exception@5.5.0

## 5.4.1

### Patch Changes

- 1a882652: Quick fix for new dep orgnization
- Updated dependencies [1a882652]
  - @milkdown/exception@5.4.1

## 5.4.0

### Minor Changes

- 6eef6cd1: Bug fixes, UX improvements and dependency optimization.

### Patch Changes

- Updated dependencies [6eef6cd1]
  - @milkdown/exception@5.4.0

## 5.3.5

### Patch Changes

- d28d71c1: Bug fixes and ux improvements
- Updated dependencies [d28d71c1]
  - @milkdown/exception@5.3.5
  - @milkdown/prose@5.3.5

## 5.3.4

### Patch Changes

- 1e8cce33: Image load status improvement and support for heading id
- Updated dependencies [1e8cce33]
  - @milkdown/exception@5.3.4
  - @milkdown/prose@5.3.4

## 5.3.3

### Patch Changes

- f7609d48: Bug fix and ux improvements
- Updated dependencies [f7609d48]
  - @milkdown/exception@5.3.3
  - @milkdown/prose@5.3.3

## 5.3.2

### Patch Changes

- d62a6011: Bug fixes and new listener API
- Updated dependencies [d62a6011]
  - @milkdown/exception@5.3.2
  - @milkdown/prose@5.3.2

## 5.3.1

### Patch Changes

- 0f32decd: Bug fixe and ux improvement
- Updated dependencies [0f32decd]
  - @milkdown/exception@5.3.1
  - @milkdown/prose@5.3.1

## 5.3.0

### Minor Changes

- ed679a03: Optimize vue and react renderer.

### Patch Changes

- Updated dependencies [ed679a03]
  - @milkdown/exception@5.3.0
  - @milkdown/prose@5.3.0

## 5.2.1

### Patch Changes

- eb74e3b5: Add es and cjs bundle, fix bugs and improve ux
- Updated dependencies [eb74e3b5]
  - @milkdown/exception@5.2.1
  - @milkdown/prose@5.2.1

## 5.2.0

### Minor Changes

- 42055660: Add menu plugin and lots of optimize.

### Patch Changes

- Updated dependencies [42055660]
  - @milkdown/exception@5.2.0
  - @milkdown/prose@5.2.0
