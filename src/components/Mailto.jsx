const Mailto = ({ email, subject, body, children }) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject || ""
    )}&body=${encodeURIComponent(body || "")}`;
  
    return (
      <a href={mailtoLink}>
        {children}
      </a>
    );
  };
  
  export default Mailto;