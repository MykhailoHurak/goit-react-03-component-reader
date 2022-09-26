export const Controls = ({ onChangeIndex, currentItem, totalItems }) => {
  return (
    <section>
      <button
      type="button"
      onClick={() => onChangeIndex(-1)}
      disabled={currentItem === 1}
    >Назад</button>

    <button
      type="button"
      onClick={() => onChangeIndex(1)}
      disabled={currentItem === totalItems}
    >Вперед</button>
    </section>
    )
} 