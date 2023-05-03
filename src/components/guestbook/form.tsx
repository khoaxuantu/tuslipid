function Form() {
    return (
        <form method="post" action="" className="mb-3 guestbook-form row">
            <input 
                className="col-10 ps-3 pt-3 pb-3 pe-5" 
                placeholder="Your message..."
                type="text" name="" id="" />
            <button className="col-2 p-2" type="submit"><b>Sign</b></button>
        </form>
    );
}

export default Form;