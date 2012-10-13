---
layout: post
title: "为什么Git每次提交时总要求输入密码？"
description: "Git每次提交时询问密码"
category:
  - DevTools
tags: [Git, Mac]
---
{% include JB/setup %}

在使用 [Git][5] 的时候，经常会遇到需要频繁输入密码的情况，在每次 commit 的时候都要求输入你的用户名和密码，如果提交频繁的话甚是不便。

**NOTE：** 如果你在用 Mac 并且刚刚升级到 Mountain Lion，那么会导致 `git` 命令找不到的错误，请参见这篇文章[《Mountain Lion 中 Git “Command Not Found” 错误的解决办法》][7]。

那么，究竟为什么会出现这种情况呢？答案就是，你在克隆（clone）分支时使用了 HTTPS 的地址，如图所示：

![clone https][1]

那么 HTTPS 的地址是做什么用的呢？它是用在一些防火墙或者代理服务器设置比较严格的情况下的，比如有些公司是禁止使用 SSH 连接外网的，那么在这种情况下要想使用 Git 的话，就只能用 HTTPS 的方式了。使用 HTTPS 的方式，也有储存密码的方式，本文后面会讲到。我们这里首推的方式是切换到 SSH，如果你的网络环境支持的话。

**切换到 SSH 方式（推荐）**

如果你之前没有设置过 SSH 的话，可以参考[官方文档][4]，虽然是英文的，不过结合截图仔细看看都可以理解的，这里就不翻译了。

通过命令行工具切换 URL 的步骤如下：

1. 打开你在 github.com 上的 repo

![clone https][2]

2. 选择 SSH 克隆 URL，点击 URL 右侧的复制按钮将其复制到剪贴板

![clone https][3]

3. 打开命令行工具，运行 `git remote set-url origin` 例如：

    $ git remote set-url origin git@github.com:user/repo.git

然后再次 commit，如果出现类似：

    Permission denied (publickey).

字样，那么说明你的 SSH key 没有设置或已经失效（譬如升级到 Mountain Lion 系统后），请重新参照上文的[官方文档][4]进行设置即可。

**HTTPS 方式保存密码**

如果你的网络环境中只能使用 HTTPS 的方式，那么可以尝试安装 osxkeychain 凭据助手，并在 Git 中设置使用。注意：Git 版本要在 1.7.10 及以上才可使用。

如果你装了 [homebrew][6]，那么应该已经自带了 osxkeychain，可以通过下面的命令验证：

    $ git credential-osxkeychain
    # Test for the cred helper
    Usage: git credential-osxkeychain <get|store|erase>

如果没有安装的话，可以使用 `curl` 下载并安装：

    $ git credential-osxkeychain
    # Test for the cred helper
    git: 'credential-osxkeychain' is not a git command. See 'git --help'.

    $ curl -s -O http://github-media-downloads.s3.amazonaws.com/osx/git-credential-osxkeychain
    # Download the helper

    $ chmod u+x git-credential-osxkeychain
    # Fix the permissions on the file so it can be run

现在，你需要将助手安装到与 Git 的安装目录相同的位置：

    $ which git
    # Find where git is installed
    /usr/local/git/bin/git

    $ sudo mv git-credential-osxkeychain /usr/local/git/bin/
    # Move the file so git can access it
    Password: [enter your password]

    # NOTE: the path /usr/local/git/bin may vary based on your OS version or where
    # you have installed Git. If `which git` showed a different value, you should
    # adjust the location to which you `mv` the file.  For example, if `which git`
    # said "/usr/bin/git", use `sudo mv git-credential-osxkeychain /usr/bin`.

若想让 Git 使用 osxkeychain，可以在 Git 的全局设置中进行设置：

    $ git config --global credential.helper osxkeychain
    # Set git to use the osxkeychain credential helper

经过这样的设置之后，下次再克隆 HTTPS 地址时会询问你的用户名和密码，并授权给 OSX keychain。完成这些之后你的用户名和密码就会存储到 keychain 中，再也不会在 Git 中询问了。

注意：这个凭据助手只适用于克隆 HTTPS 形式的 URL，如果使用 SSH 形式的 URL，请按上文步骤进行操作。

[1]: http://www.44ux.com/content/uploads/2012/10/clone-https.png
[2]: http://www.44ux.com/content/uploads/2012/10/ssh-clone-url.png
[3]: http://www.44ux.com/content/uploads/2012/10/clone-url-clippy.png
[4]: https://help.github.com/articles/generating-ssh-keys
[5]: http://44ux.com/tags.html#Git-ref
[6]: http://mxcl.github.com/homebrew/
[7]: http://44ux.com/blog/2012/08/27/mountain-lion-git-fix/
