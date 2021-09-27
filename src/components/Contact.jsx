import './Contact.css';

function Contact() {
    return (
        <div>
            <section>
                <div className="contact-container">
                    <h1>Contact me</h1>
                    <form action="mailto:lynnelu21@gmail.com" method="POST">
                        <input type="text" name="name" required className="input" placeholder="Name" />
                        <br />
                        <input className="input" name="email" type="email" placeholder="Email" />
                        <button>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;