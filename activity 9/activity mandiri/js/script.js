function fn_ValForm() {
  var sMsg = "";
  var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

  if (document.getElementById("name").value == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!emailPattern.test(email)) {
    sMsg += "\n* Format email tidak valid";
  }
  if (document.getElementById("gender").value == "") {
    sMsg += "\n* Anda belum memilih jenis kelamin";
  }
  if (document.getElementById("age").value == "") {
    sMsg += "\n* Anda belum mengisikan umur";
  }
  if (document.getElementById("address").value == "") {
    sMsg += "\n* Anda belum mengisikan alamat";
  }
  if (document.getElementById("message").value == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  } else {
    return true;
  }
}