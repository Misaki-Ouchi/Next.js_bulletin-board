import {useState} from 'react'

const Post_title = () => {
  // 仮リスト
  const categories = [{ category_id: 1, category_name: "みんなに相談"}, { category_id: 2, category_name: "雑談"}, { category_id: 3, category_name: "報告"}]

  const initialValues = {
    title_name: '',
    category_id: 1,
    outline: '',
    created_at: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    if (
      Object.keys(formErrors).length === 0 &&
      formValues.title_name !== "" &&
      formValues.outline !== ""
    ) {
      const dt = new Date()
      setFormValues(formValues.created_at = dt)
      postTitles(formValues)
    }
  }

  const validate = (values) => {
    const errors = {}
    if (values.title_name === '') {
      errors.title_name = '※タイトルを入力してください。'
    } else if (values.title_name.length > 30) {
      errors.title_name = '※30文字以内で入力してください。'
    }
    if (values.outline === '') {
      errors.outline = '※本文を入力してください。'
    } else if (values.outline.length > 500) {
      errors.outline = '※500文字以内で入力してください。'
    }
    return errors
  }

  const postTitles = async (values) => {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/titles`,
      postData,
    )
    const response = await res.json()
  }

  return (
      <div className='container_box text-sm'>
        <h1 className='mt-4 mb-8'>トピックの作成</h1>
        <hr className='mb-6'/>
          <p className='text-center mb-6'>必要事項を入力し、「作成」ボタンを押してください。</p>
          <form className="bg-gray-200 border border-gray-400 rounded-xl p-6 mb-4">
            <div>
              <div className='flex mb-2'>
                <label className='form_label form_label_required'>タイトル</label>
                <input
                  className='newTopic_input'
                  type="text"
                  placeholder='30文字以内'
                  name="title_name"
                  value={formValues.title_name}
                  onChange={handleChange}
              />
              </div>
              <div className='flex mb-2'>
                <label className='form_label'>カテゴリ</label>
              <select
                className='newTopic_input'
                name="category_id"
                onChange={handleChange}
                value={formValues.category_id}
              >
                {categories.map((item, index) => {
                  return (
                    <option
                      key={item.category_id}
                      value={item.category_id}
                      label={item.category_name}
                    />
                    )
                  })}
                </select>
              </div>
              <div className='flex mb-2'>
                <label className='form_label form_label_required'>本文</label>
                <textarea
                  className='newTopic_input h-24'
                placeholder='500文字以内'
                name="outline"
                  value={formValues.outline}
                  onChange={handleChange}
              />
              </div>
            <span className='errorText'>{formErrors.title_name}</span>
            <span className='errorText'>{formErrors.outline}</span>
            </div>
          </form>
          <button onClick={handleSubmit} className='btn form_btn'>作成</button>
      </div>
  )
}

export default Post_title
