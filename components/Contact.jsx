import { useRef } from 'react';

const Contact = () => {

  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log('送信成功');
      }
    });
    e.target.reset();
  }

  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold mt-8 mb-4 text-pink-400 drop-shadow-sm">Contact</h2>
      <p className="text-sm md:text-lg mt-8 tracking-wide">
        Web制作や動画撮影の他にも何かお手伝いできることがあれば、気軽にお問い合わせください。
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            お名前
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            required
            placeholder="お名前を入力してください。"
            ref={nameRef} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            メールアドレス
          </label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            required 
            placeholder="メールアドレスを入力してください。"
            ref={emailRef} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            メッセージ
          </label>
          <textarea 
            type="message" 
            className="form-control" 
            id="message"
            placeholder="お問い合わせの内容を入力してください。"
            ref={messageRef} 
          />
        </div>
        <button type="submit" className="text-white py-2 px-4 rounded-full bg-pink-400 hover:bg-pink-300 transition duration-300">メール送信</button>
      </form>
    </section>
  )
}

export default Contact
