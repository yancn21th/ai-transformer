# VS Code MCP 配置说明

这个工作区已经包含了一个 MCP 配置骨架，位置如下：

- `.vscode/mcp.json`
- `.vscode/settings.json`

## 你需要改的地方

打开 `.vscode/mcp.json`，把下面这些值替换成你自己的服务器信息：

- `my-mcp-server`: 服务器名称
- `command`: 启动命令，比如 `node`、`uvx`、`npx`
- `args`: 启动参数，比如脚本路径或包名

当前示例：

```json
{
  "servers": {
    "my-mcp-server": {
      "type": "stdio",
      "command": "node",
      "args": ["./path/to/server.js"]
    }
  }
}
```

## 常见示例

### 用 npx 启动包

```json
{
  "servers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@microsoft/mcp-server-playwright"]
    }
  }
}
```

### 用本地 Node 脚本启动

```json
{
  "servers": {
    "local-server": {
      "type": "stdio",
      "command": "node",
      "args": ["./server/index.js"]
    }
  }
}
```

## 在 VS Code 里启用

1. 打开命令面板
2. 运行 `MCP: List Servers`
3. 找到你配置的服务器并启动
4. 第一次启动时确认 trust 提示

也可以直接运行 `MCP: Open Workspace Folder Configuration` 来编辑当前工作区的 `mcp.json`。

## 注意

- 不要把 API Key 直接写进 `mcp.json`
- 优先用环境变量或 VS Code 的 input variables
- 本地 MCP 服务器可以执行本机命令，只添加可信来源
- 现在已经开启 `chat.mcp.autoStart`，配置变更后 VS Code 会自动尝试重启服务器