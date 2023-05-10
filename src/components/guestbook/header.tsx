export default function GuestbookHeader() {
    return (
      <div className='header-grp'>
        <div className='header-txt'>
          <b>Guestbook</b>
        </div>
        <div className='description-txt mt-2'>
          This idea is inspired by {" "}
          <a href="https://leerob.io/" target='_blank' rel='noreferrer'>Lee Robinson's portfolio</a>
          {" "}:{")"}
        </div>
        <hr />
      </div>
    );
}