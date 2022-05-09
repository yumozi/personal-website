import style from '../styles/Loading.module.css'

const Loading = () => {
  return (
    <div class={style.wrapper}>
        <div class={style.circle}></div>
        <div class={style.circle}></div>
        <div class={style.circle}></div>
        <div class={style.shadow}></div>
        <div class={style.shadow}></div>
        <div class={style.shadow}></div>
    </div>

  );
}
export default Loading;
