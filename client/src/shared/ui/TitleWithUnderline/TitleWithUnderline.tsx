import s from './TitleWithUnderline.module.css';

interface Title {
  title: string
}

const TitleWithUnderline = ({ title }: Title) => {
  return (
    <div className={s.titleContainer}>
      <div className={s.title}>{title}</div>
      <div className={s.underline}></div>
    </div>
  );
};

export default TitleWithUnderline;