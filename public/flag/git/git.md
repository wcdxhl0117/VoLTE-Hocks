git add <filename> 将一个文件加入
git add . 全部加入
git commit -m message
git log
git status

# 如果文件 add 后后悔了，可以 get reset <filename> 将文件变红

# 文件 4 种状态

- untracked 新增的文件
- unmodified staged 文件 commit 变为 unmodified
- modified unmodifie 文件修改后变为 modified
- staged 新文件使用 git add 后变成 staged

# 自定义 git 命令 alias git config --global alias.co checkout

# reset git reset commitID 回到 commitID 这次提交时的状态

- --hard:不保存所有变更
- --soft: 保存变更切变更内容处于 staged（绿色）
- --mixed:保留变更且变更内容处于 (红色)

# 分支 git checkout -b <name> <template>

- name 为分支名，template 是把一个分支或者 commit 作为模板，如果第二个参数不填就以当前分支为模板，新建的分支会保留模板分支的所有 commit,建好分之后两个分支就独立了

# 合并 merge 合并分支的变更

- 比如要把 a 分支和 b 分支的代码合并到 master 分支
- 切到 master 分支
- 先合并 a 分支代码 git merge a 解决冲突
- 再合并 b 分支代码 git merge b 解决冲突

# 远程仓库

- 本地分支上传到远程 git push --set-upstream origin branch-a
- set-upstream 是指设置上流分支，origin 指远端仓库，所以这个命令就是把远程仓库的 branch-a 分支作为本地的上流分支 branch-a

- git fetch 获知远端仓库信息
- git checkout branch-a 切换分支到 branch-a

# git push

# rebase 变基,枚举变更的 commit

- 将 bc 分支变基为 master 最后一次提交后一次提交
- 在 bc 分支 git rebase master 解决冲突后 git add . 放进暂存区，然后 git rebase --continue 继续下一个节点的 rebase
