### git flow 工作流

#### 使用背景

在多组员，多项目等环境进行协同工作时，如果没有统一规范、统一流程，则会导致额外的工作量，甚至会做无用功。所以要减少版本冲突，减轻不必要的工作，就需要规范化的工作流程。

#### 使用总则

- 统一使用Git作为版本管理工具。
- 统一GitFlow流程管理控制版本。

#### 分支流程

![image](https://note.youdao.com/yws/api/personal/file/WEB86bc722a13cd5f776cafb10939d3451b?method=download&shareKey=45088dbbe3478a8eda3f40eb81fdbded)

#### 分支概述

- master：对外发布产品使用的分支，该分支的提交必须是最接近对外上线的版本，不允许在该分支上进行开发，要始终保持该分支的稳定。

- develop：内部开发产品所用的分支，该分支的最新提交必须是一个相对稳定的测试版本，同样地，不允许在该分支上面进行开发

- feature：新功能分支，每个新的功能都应该创建一个独立的分支，从develop分支派生出来，功能开发完成之后合并到develop分支，不允许功能未开发完成便合并到develop分支。

- release：发布前的测试分支，一旦开发的功能满足发布条件或者预定发布日期将近，应该合并所有的功能分支到develop分支，并在develop分支开出一个release分支，在这个分支上，不能在添加新的功能，只能修复bug，一旦到了发布日期，该分支就要合并到master和develop分支，并且打出版本的标签。

- hotfix：修复分支，在master上创建的分支，用于对线上的bug的修复，修复问题后，它应该合并回master和develop分支，然后在master分支上打一个标签。

#### 长期分支 & 辅助分支

- git-flow流程中最主要的五个分支分别为master，release，develop，feature，hotfix。
- 长期分支：master，develop。
- 辅助分支：release，feature，hotfix。、
- 长期分支是相对稳定的分支，所有被认可的提交最终都要合并到这两个分支上。
- 辅助分支是工作需要临时开的分支，在完成他们的工作之后通常是可以删除的。

#### 开发流程

1. 创建远程仓库，并拉到本地

创建远程仓库的时候默认是创建master分支的，因此拉下来的项目也处于master分支。

```js
git clone ...
```

2. 创建develop分支

因为master分支上面是不允许进行开发的，创建长期开发分支develop

```js
//创建方式一
//远程仓库先创建分支,再本地创建分支,并关联远程分支
//实现方式一
git checkout -b develop
git branch --set-upstream develop/origin develop
//实现方式二
git checkout -b develop origin/develop //创建的同时就关联远程仓库
//如果报错,执行下面命令,在输入该命令
git fetch 
//实现方式三
git fetch origin develop:develop
git branch --set-upstream-to=origin/develop develop
//创建方式二
//本地创建分支,再推送到远程仓库
git checkout -b develop
git push origin develop:develop
```
3. 开发新功能

- 假如开发新功能a，在develop分支创建新功能分支a

```
git checkout develop
git checkout -b feature/a
```

- 如果有必要，将该功能分支推送到远程

```
git push origin feature/a:feature/a
```

- 如果有必要，成员可将该分支拉下来

```
git fetch origin feature/a:feature/a
```

#### 完成新功能

- 新功能完成之后需要将feature分支合并到develop分支，并push到远程仓库(在push之前，建议先pull一下，将本地的develop分支内容更新到最新版本，再push，避免线上版本与你commit时候文件内容产生冲突)

```
git checkout develop
//-no-ff 参數可以保存feature/a分支上的历史记录
git merge --no-ff feature/a
git push origin develop
```

- 合并完成之后，确定该分支不再使用，则删除本地和远程上的该分支
 
```
git branch -d feature/a
git push origin --delete feature/a
```

#### 测试新版本

当新功能基本完成之后，我们要开始在release分支上测试新版本，在此分支上进行一些整合性的测试，并进行小bug的修复以及增加例如版本号的一些数据。版本号根据 master 分支当前最新的tag来确定即可，根据改动的情况选择要增加的位

- 开发布分支

```js
//在develop分支中开
git checkout -b release/1.2.0
//将分支推送到远程(如果有必要)
git push origin release/1.2.0:release/1.2.0
```

- 保证本地的release分支处于最新状态

```js
//将本地的release分支内容更新为线上的分支
git pull origin release/1.0.0
```

- 制定版本号

```js
//commit 一個版本，commit的信息为版本升到1.2.0」
//git commit -a相当于git add . 再git commit
git commit -a -m "Bumped version number to 1.2.0"
```

- 将已制定好版本号等其他数据和测试并修复完成了一些小bug的分支合并到主分支

```js
//切换至主要分支
git checkout master
//将release/1.2.0分支合并到主要分支
git merge --no-ff release/1.2.0
//上tag
git tag -a "1.2.0" HEAD -m "新版本改动描述"
```

- 将release分支合并回开发分支

```js
//切换至开发分支
git checkout develop
//合并分支
git merge --no-ff release/1.2.0
```

- 推送到远程仓库

```js
//将开发分支推送到远程
git push origin develop
//将master分支推送到远程
git push origin master
```

- 删除分支

```
git branch -d release/1.2.0
git push origin --delete release/1.2.0
```

#### 修补线上Bug

- 此修复bug针对的是线上运行的版本出现了bug，急需短时间修复，无法等到下一次发布才修复，区别于开发过程中develop上的bug，和测试过程中的release上的bug，这些bug，在原分支上改动便可以。
- 在master根据具体的问题创建hotifix分支，并推送到远程

```js
git checkout master
git checkout -b hotfix/typo
git push origin hotfix/typo:hotfix/typo
```

- 制定版本号，一般最后位加1

```js
//commit 一個版本，commit的信息是版本跳
git commit -a -m "Bumped version number to 1.2.1"
```

- 修正后commit并将本地的hotfix分支更新为线上最新的版本

```
git commit -m "..."
git pull origin hotfix/typo
```

- 将刚修复的分支合并到开发分支和主分支

```js
//切换到开发分支
git checkout develop
//合并
git merge --no-ff hotfix/typo
//切换到主要分支
git checkout master
//將hotfix分支合并到主要分支
git merge --no-ff hotfix/typo
//上tag
git tag -a "1.2.1" HEAD -m "fix typo"
```

- 删除修补分支

#### 命名约定

- 主分支名称：master
- 主开发分支名称：develop
- 新功能开发分支名称：feature-…/feature/…，其中…为新功能简述
- 发布分支名称：release-…/release/…，其中…为版本号。
- bug修复分支名称：hotfix-…/hotfix/…，其中…为bug简述。

#### 冲突

- 当我们需要将本地的分支push到远程的时候，举例：当我们新功能开发完成之后，我们合并到develop分支，要将develop分支push到远程的时候，此时如果远程的develop分支的内容有更新，我们就需要使用git pull命令将本地的develop分支更新到最新的版本，再推送，否则会产生冲突，无法推送。
- 第一种情况下的pull操作可能也会产生冲突，如果我们本地修改和新commit的内容修改了同一个文件同个位置，此时就应该进行开发者间协商。
- 当我们合并分支的如果两个分支同时修改了同个文件同个位置时候也会产生冲突，此时需要进行手动解决冲突。

#### 提交规范

Git Commit 提交规范
写好 Commit message 好处多多：

1. 统一团队Git commit 日志风格
2. 方便日后 Reviewing Code
3. 帮助我们写好 Changelog
4. 能很好的提升项目整体质量

业界比较推崇 Angular 的 commit 规范

Commit message 包括三个部分：Header，Body 和 Footer。完整格式如下：

```
<type>(<scope>): <subject>

<BLANK LINE>

<body>

<BLANK LINE>

<footer>
```

**1. type**

提交 commit 的类型，包括以下几种

- feat: 新功能

- fix: 修复问题

- docs: 修改文档

- style: 修改代码格式，不影响代码逻辑

- refactor: 重构代码，理论上不影响现有功能

- perf: 提升性能

- test: 增加修改测试用例

- chore: 修改工具相关（包括但不限于文档、代码生成等）

2) scope

修改文件的范围，比如：视图层、控制层、docs、config, plugin

3) subject

- subject 是 commit 目的的简短描述（用一句话清楚的描述这次提交做了什么），不超过50个字符

4) body

- 补充 subject 添加详细说明，可以分成多行，适当增加原因、目的等相关因素，也可不写

5 ) footer

- 当有非兼容修改(Breaking Change)时必须在这里描述清楚

- 关闭issue或是链接到相关文档，如 Closes #1, Closes #2, #3


#### 关于 git flow 和 提交规范的使用，参考如下：

[Using git-flow to automate your git branching workflow](https://jeffkreeftmeijer.com/git-flow/)

[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
