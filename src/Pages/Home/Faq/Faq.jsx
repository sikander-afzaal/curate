import React from "react";
import "./Faq.css";
import FaqRow from "../../../Components/FaqRow/FaqRow";
function Faq() {
  const data = [
    {
      ques: "How does Curate Work?",
      answer:
        "You can make payment via credit card, debit card, net banking, UPI transfer or google pay etc. Nunc sit amet justo odio. In ac nibh in nisi pellentesque.",
    },
    {
      ques: "Where can I download the app?",
      answer:
        "Curabitur sed sem accumsan libero fringilla posuere congue ut sapien. Suspendisse potenti. Donec quis euismod velit. Sed ut velit non justo feugiat malesuada vitae non ligula.",
    },
    {
      ques: "What are the shipping methods?",
      answer:
        "If you have made payment, but haven’t received the download link with the purchase, you can raise a ticket our expert will get back as soon as possible on your registered email or write to us support@onirapp.com",
    },
    {
      ques: "Is this a subscription?",
      answer:
        "You can cancel your account any time. You are free for it or if you have any questions about the app you can write to us at complaint@onirapp.com",
    },
    {
      ques: "Can I change my subscription?",
      answer:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent molestie justo vitae viverra porttitor. Quisque tincid unt leo et consequat consequat. Mauris euismod pharetra velit ac tristique. Fusce orci turpis, mattis ut bibendum a, dictum nec massa.",
    },
  ];
  return (
    <div className="faq">
      <h1 className="roboto">Frequently Asked Questions</h1>
      <div className="faq-grid">
        {data.map((elem, key) => {
          return (
            <FaqRow
              key={"faqrow" + key}
              ques={elem.ques}
              answer={elem.answer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
