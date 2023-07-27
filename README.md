# 購物網站(shopping-site-front-end)

# 大綱
- [網站簡介](#網站簡介)
- [安裝專案](#安裝專案)
- [啟動專案](#啟動專案)
- [內容簡介](#內容簡介)
  - [使用者](#使用者)
  - [主頁面](#主頁面)
  - [購物車](#購物車)
  - [商店](#商店)
- [Demo](#Demo)
- [持續開發功能](#持續開發功能)

# 網站簡介

使用前端框架Vue3所打造的購物網站，目前皆為測試階段，能體驗較為陽春的透物網站體驗，網站所含內容皆會在以下作介紹，也非常歡迎對此專案興趣或有美感的人提交 Issue 或者 Pull Request來提供意見交流，也歡迎自行將專案clone回去自行做加工

# 安裝專案

1.基本條件
```
已於本地安裝 node 和 npm
```

2.Clone 專案
```
git clone https://github.com/chachagof/shopping-site-front-end.git
```

3.進入專案資料夾
```
cd shopping-site-front-end
```

4.安裝相關套件
```
npm install
```

# 啟動專案

1.啟動專案
```
請注意已與後端專案做連結 [後端專案](https://github.com/chachagof/shopping-site-back-end)
npm run dev
```

2.停止專案
```
若想停止專案僅需輸入
Ctrl + c
```

# 內容簡介

## 使用者

**使用者分為三種權限，分別為買家與賣家級無登入狀態，功能不盡相同，以下為預設使用者**

| 使用者 | 帳號 |密碼 |
|  :---: | :---:  |  :---:  |
| 買家   | buyer001   | titaner    |
| 賣家   | seller001  | titaner    |

### 使用者權限

### 無登入
 - 可以在首頁看見所有商品
 - 可以使用篩選功能查找自己喜歡的商品
 - 可以看見商品詳細內容

### 買家
 - 無登入的所有權限皆能使用
 - 買家可以將喜歡的東西加入購物車
 - 買家可以查看自己的購物車

### 賣家
 - 無登入的所有權限皆能使用
 - 賣家可以自行新增商品
 - 賣家僅能對自己的產品進行修改及刪除
 - 賣家能對自己的商店進行介紹

## 主頁面

- 會顯示所有商品
- 可以透過條件篩選顯示商品
  - 商品名稱
  - 賣家名稱
  - 種類名稱
  - 價格區間
- 僅有買家能透過右上角標示進入自己的購物車
- 僅有賣家能透過右上角標示進入自己的商店

## 購物車

- 能在購物車裡增加喜愛商品的購買數量
- 即時顯示該項商品總價格
- 即時顯示購物車商品總價格及數量
- 結帳時會清除購物車

## 商店

- 能簡單介紹商店
- 賣家可以新增商品
- 賣家可以修改商品

# Demo

## 首頁
![Demo home](https://github.com/chachagof/shopping-site-front-end/assets/116162205/5d7c21d0-9135-43ba-b3a3-eb2875f2d668)

## 購物車
![Demo cart](https://github.com/chachagof/shopping-site-front-end/assets/116162205/889d4bac-61fa-4bb6-8cdc-e2f2bcca39bf)

## 商店
![Demo shop](https://github.com/chachagof/shopping-site-front-end/assets/116162205/048c0324-c549-4bee-92c6-268a3c8858b9)


# 持續開發功能

- 使用者能修改個人資料
- 買家擁有個人頁面
- 賣家商店開放瀏覽
- UI/UX 的持續改進
- 持續開發中...
