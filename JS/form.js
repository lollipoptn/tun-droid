function getselect(e) {
    for (var t = document.getElementsByName(e), o = 0; o < t.length; o++)
      if (t[o].selected) return t[o].value;
    return ""
}

function generate() {
    var e = document.getElementById(ContactForm1_contact-form-name).value,
        t = document.getElementById(ContactForm1_contact-form-email).value,
        o = getselect(gender),
        c = document.getElementById(ContactForm1_contact-form-age).value,
        a = document.getElementById(ContactForm1_contact-form-domicele).value,
        n = document.getElementById(ContactForm1_contact-form-urlfb).value,
        _ = document.getElementById(ContactForm1_contact-form-contact).value,
        f = getselect(jobs),
        s = getselect(lvl),
        b = document.getElementById(ContactForm1_contact-form-reason).value,
        x = document.getElementById(ContactForm1_contact-form-email-message),
        i = document.getElementById(ContactForm1_contact-form-submit);
    return x.value = sett.name + " : " + e + sett.br + sett.email + " : " + t + sett.br + sett.gender + " : " + o + sett.br + sett.age + " : " + c + sett.br + sett.domicele + " : " + a + sett.br + sett.urlfb + " : " + n + sett.br + sett.contact + " : " + _ + sett.br + sett.jobs + " : " + f + sett.br + sett.lvl + " : " + s + sett.br + sett.reason + " : " + b, i.click(), !1
}

function
dialog() {
    document.getElementById(contact_layout).remove()
}
    sett = {
        name: "Name",
        email: "Email",
        gender: "Gender",
        age: "Age",
        domicele: "Domicele",
        urlfb: "Url Facebook",
        contact: "Contact",
        jobs: "Jobs",
        lvl: "Level",
        reason: "Give your reasons why you want to join?",
        br: "\n",
    },
    ageinput = document.getElementById(ContactForm1_contact-form-age);
ageinput.oninput = function() {
    this.value.length > 2 && (this.value = this.value.slice(0, 2))
}, $(function() {
    $("#us_contact input,#ContactForm1_contact-form-reason").keyup(function() {
        var e = !1;
        $("#us_contact input,#ContactForm1_contact-form-reason").each(function() {
            "" == $(this).val() && (e = !0)
        }), e ? $("#sendform").attr(disabled, "disabled") : $("#sendform").removeAttr("disabled")
    })
}), "undefined" != typeof BLOG_attachCsiOnload && null != BLOG_attachCsiOnload && (window.blogger_templates_experiment_id = "templatesV1", window.blogger_blog_id = blogsid, BLOG_attachCsiOnload("")), _WidgetManager._Init("//www.blogger.com/rearrange?blogID=" + blogsid, nameblog, blogsid), _WidgetManager._RegisterWidget("_ContactFormView", new _WidgetInfo("ContactForm1", "footer1", null, document.getElementById("ContactForm1"), {
    contactFormMessageSendingMsg: "جاري الإرسال...",
    contactFormMessageSentMsg: "<div id='contact_layout'><div class='contact_message'><div class='contact_top'><i class='fa fa-check'></i></div>" + successmsg + "<a href='#us_contact' onclick='closedialog()' class='contact_close'>أغلق</a></div></div>",
    contactFormMessageNotSentMsg: "<div id='contact_layout'><div class='contact_message error_message'><div class='contact_top'><i class='fa fa-times'></i></div>" + notsendmsg + "<a href='#us_contact' class='contact_close' onclick='closedialog()'>Close</a></div></div>",
    contactFormInvalidEmailMsg: "<div id='contact_layout'><div class='contact_message error_message'><div class='contact_top'><i class='fa fa-envelope'></i></div>" + invalidmsg + "<a href='#us_contact' class='contact_close' onclick='closedialog()'>Close</a></div></div>",
    contactFormEmptyMessageMsg: "Message field cannot be empty.",
    title: "Contact Form",
    blogId: blogsid,
    contactFormNameMsg: "Name",
    contactFormEmailMsg: "Email",
    contactFormMessageMsg: "Message",
    contactFormSendMsg: "Send",
    submitUrl: "https://www.blogger.com/contact-form.do"
}, "displayModeFull"));