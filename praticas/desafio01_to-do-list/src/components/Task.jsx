import { Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';


export function Task() {
  return (
    <div className={styles.task}>
      <button title='Marcar como concluída' >
        <Circle className={styles.circleIcon} size={23} weight="bold" />
      </button>
      <p>
        Ajeitar o duotone desse ícone. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <Trash className={styles.trashIcon} size={24} weight="light" />
    </div>
  );
}