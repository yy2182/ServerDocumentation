# NeoForge 端开服教程

## 获取 Java 运行环境

我懒得写呀QWQ，去看[这里](/zh_CN/JAVA/Vanilla/QuickStart#%E5%AE%89%E8%A3%85-java-%E7%8E%AF%E5%A2%83)吧。

## 获取服务端

你需要拥有一个服务端才能把服务器开起，你有众多服务端可以选择，例如：

>- [NeoForge](https://neoforged.net/)
>- [Forge](https://files.minecraftforge.net/)
>- [Mohist](https://www.mohistmc.com/)
>- [CatServer](https://catmc.org/)

但是在这里我们的讨论范围仅限于 NeoForge 服务端，其他服务端开服流程都是大同小异。

你要在 [NeoForge](https://neoforged.net/) 官网下载对应版本的服务端

安装完成之后 你应该可以看到下方有一个 ``server.jar`` 文件。这就是NeoForge的服务端了。

## 启动服务器

当然，服务端不会因为你干瞪眼它就自己跑起来。你需要手动启动它。

为了启动服务端，你需要做这些事：

::: details Windows
Shift + 右键服务器文件夹，单击“在此处打开命令窗口”

键入 `<java解释器路径> -jar <服务端核心位置> nogui` 回车。

服务器将会启动。
:::

::: details Linux
打开终端

键入 `<java解释器路径> -jar <服务端核心位置> nogui` 回车。

服务器将会启动。
:::

若你发现服务器输出了类似 ``EULA`` 的字样并退出，请参阅[FAQ](./FAQ.md)