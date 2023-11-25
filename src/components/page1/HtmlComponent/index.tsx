interface HtmlComponentProps {
  text: string;
}
const HtmlComponent = ({ text }: HtmlComponentProps) => {
  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </>
  );
};

export default HtmlComponent;
