# Echelon Practice

Nền tảng luyện đề online kiểu Bluebook. Vanilla HTML/CSS/JS, không cần build, chạy thẳng trên GitHub Pages hoặc Netlify.

## Cấu trúc

```
index.html              danh sách đề
test.html?id=test-01    phòng thi
history.html            học sinh xem lại kết quả
teacher.html            dashboard giáo viên
config.js               tên site, passcode giáo viên, chọn nơi lưu (local / firebase)

questions/data/         NỘI DUNG — chỉ động vào folder này mỗi ngày
  manifest.js           danh sách đề hiển thị trên trang chủ
  test-01.js            đề 01
  _demo-types.js        mẫu đủ 4 dạng câu hỏi (ẩn, mở bằng test.html?id=demo-types)
components/UI/          giao diện: styles.css (toàn bộ màu, font), art.js (robot, icon), runner.js (phòng thi),
                        renderers.js (từng dạng câu), review.js (màn chữa bài), library.js (trang chủ), chrome.js
logic/                  scoring.js, timer.js, navigation.js, highlighter.js, qbank.js (nạp đề), util.js
student-history/        storage.js (lưu attempt), history.js (trang kết quả của học sinh)
teacher-dashboard/      dashboard.js, stats.js
firestore.rules         rules nếu dùng Firebase
```

## Thêm đề mới mỗi ngày

1. Tạo `questions/data/test-02.js` (copy `test-01.js` rồi sửa nội dung).
2. Thêm một dòng vào `questions/data/manifest.js`:
   ```js
   { id: "test-02", file: "test-02.js", title: "Test 02", description: "...", questions: 20, minutes: 24 },
   ```
3. Commit lên GitHub. Xong — không sửa file giao diện nào.

**Đừng sửa đề đã có học sinh làm.** Bài làm cũ vẫn chấm theo đáp án lúc làm, nhưng màn chữa bài sẽ hiện nội dung mới (có cảnh báo). Muốn thay đề thì tạo id mới (`test-02b`).

Mở Console (F12) khi chạy đề mới: nếu file sai định dạng (thiếu đáp án, trùng id, đáp án không khớp lựa chọn…) sẽ có cảnh báo `[test-02] Q5: ...`.

## Định dạng câu hỏi

```js
{
  id: "sec-01",                 // không bắt buộc, nhưng nên có và không trùng
  type: "mcq",                  // mcq | select | fill | order  (mặc định mcq)
  skill: "Boundaries: colon",   // dùng cho thống kê theo câu
  passage: "Text... ______ ...",// 3+ dấu gạch dưới = ô trống. Dòng trống = xuống đoạn. Có thể dùng HTML (<i>, <b>)
  notes: ["...", "..."],        // dạng Rhetorical Synthesis: tự thêm câu "While researching a topic..."
  prompt: "Which choice ...?",
  choices: ["A text", "B text", "C text", "D text"],
  answer: "C",
  explanation: "..."            // hiện sau khi nộp bài
}
```

- Có `passage` hoặc `notes` → màn chia đôi (trái bài đọc, phải câu hỏi). Không có → một cột.
- `select`: `text` có `{{0}}`, `{{1}}`…; `options` là danh sách lựa chọn cho từng ô; `answer: ["was", "was"]`.
- `fill`: `text` có `{{0}}`…; `answer: [["its"], ["color", "colour"]]` (mỗi ô một danh sách cách viết được chấp nhận, không phân biệt hoa thường; thêm `caseSensitive: true` nếu cần).
- `order`: `items` là các từ theo thứ tự đảo; `answer` là câu đúng, hoặc mảng nhiều câu đúng.
- Bỏ `answer` → câu không chấm điểm (vẫn lưu câu trả lời).
- `timeLimitMinutes: null` → không giới hạn thời gian (đồng hồ đếm lên).

## Deploy

**GitHub Pages:** mọi file và folder ở trên phải nằm ngay ở gốc repo (không bọc trong folder `echelon-practice/`, không upload file .zip). Trên web GitHub: Add file → Upload files → **kéo thả** các folder từ máy vào (nút "choose your files" không chọn được folder). Sau đó Settings → Pages → Deploy from branch → `main` / root. File `.nojekyll` phải có.

Đổi màu: sửa các biến ở đầu `components/UI/styles.css` (và bảng hex ở đầu `art.js` cho robot).

**Netlify:** kéo thả folder vào app.netlify.com, hoặc nối repo (không cần build command).

Chạy thử trên máy: `python3 -m http.server` trong folder rồi mở `http://localhost:8000`. Mở trực tiếp file bằng `file://` sẽ không nạp được đề.

## Lưu kết quả: local vs Firebase

`storage: "local"` (mặc định): mỗi bài làm lưu trong trình duyệt của chính học sinh. Học sinh xem lại được lịch sử trên máy đó, nhưng **dashboard giáo viên chỉ thấy bài làm trên trình duyệt của giáo viên**.

`storage: "firebase"`: mọi bài làm về Cloud Firestore, dashboard thấy tất cả học sinh.

1. Firebase console → project → Build → Firestore Database → tạo database.
2. Project settings → Your apps → Web app → copy config vào `firebase` trong `config.js`, đổi `storage: "firebase"`.
3. Publish `firestore.rules`. **Nếu dùng chung project với site SAT**, đừng dán đè: copy block `match /practiceAttempts/{id}` vào trong ruleset hiện tại. Collection mặc định là `practiceAttempts` để không đụng collection `attempts` của site SAT.
4. Nếu kết nối lỗi, site hiện banner vàng ghi rõ project nào và lỗi gì, và tạm lưu trên trình duyệt.

Giới hạn cần biết: học sinh không đăng nhập, nên ai biết tên/ID của người khác đều xem được kết quả của người đó, và passcode giáo viên nằm trong `config.js` (ai đọc source đều thấy). Đủ cho lớp học; nếu cần bảo mật thật thì phải thêm Firebase Authentication.

## Dữ liệu mỗi bài làm

Tên, ID, đề, giờ bắt đầu và nộp, thời gian làm, điểm (đúng/sai/bỏ trống, theo từng phần), câu trả lời từng câu, câu đánh dấu review, highlight trong bài đọc, đáp án loại trừ, và cờ "hết giờ tự nộp". Bài đang làm được autosave; đóng tab rồi mở lại sẽ có nút "Resume test" (đồng hồ vẫn chạy khi đóng tab).
