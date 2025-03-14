export default function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <form className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" cols="50" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
