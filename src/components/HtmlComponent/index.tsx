interface HtmlComponentProps {
  text: string;
}
const HtmlComponent = ({ text }: HtmlComponentProps) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </>
  );
};

export default HtmlComponent;
