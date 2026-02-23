# M117 四下課表

臨診第 1~8 組課表，支援週次選擇、日期切換、考試總覽。

## 部署到 GitHub Pages

1. 在 [GitHub](https://github.com/new) 建立新 repo（例如名稱：`M117-schedule`）
2. **不要**勾選「Initialize with README」
3. 在本機資料夾執行：

```powershell
git remote add origin https://github.com/你的帳號/M117-schedule.git
git push -u origin main
```

4. 到 GitHub 該 repo → **Settings** → **Pages** → Source 選 **Deploy from a branch**
5. Branch 選 `main`，資料夾選 `/ (root)`，Save
6. 幾分鐘後網站即可在 `https://你的帳號.github.io/M117-schedule/` 開啟
