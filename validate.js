// Validate form sử dụng jquery
$("#form").validate({
  onfocusout: false,
  onkeyup: true,
  onclick: true,
  rules: {
    user: {
      required: true,
      minlength: 4,
    },
    password: {
      required: true,
      maxlength: 5,
    },
  },
  messages: {
    user: {
      required: "Vui lòng ko để trống tên user",
      minlength: "Username quá ngắn - Tên đăng nhập lớn hơn 4 ký tự",
    },
    password: {
      required: "Bắt buộc nhập password",
      maxlength: "Nhập tối đa 5 ký tự",
    },
  },
  //   errorPlacement: function (error, element) {
  //     error.insertAfter(element);
  //   },
});
