import Title_list from '@/features/titles/Title_list'

const SomeCategory_parts = ({category_id}) => {
  return (
    <>
      <p>カテゴリー</p>
      <Title_list category_id={category_id} />
    </>
  )
}

export default SomeCategory_parts
