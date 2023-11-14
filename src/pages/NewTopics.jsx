import Header from '@/components/base/Header'

const NewTopics = () => {
  return (
    <div>
      <Header />
      <div className='container_box text-sm'>
        <h1 className='mt-4 mb-8'>トピックの作成</h1>
        <hr className='mb-6'/>
          <p className='text-center mb-6'>必要事項を入力し、「作成」ボタンを押してください。</p>
          <form className="bg-gray-200 border border-gray-400 rounded-xl p-6 mb-4" action="">
            <div>
              <div className='flex mb-2'>
                <label className='form_label form_label_required'>タイトル</label>
                <input className='newTopic_input' type="text" placeholder='30文字以内'/>
              </div>
              <div className='flex mb-2'>
                <label className='form_label'>カテゴリ</label>
                <select className='newTopic_input' name="category_select">
                  <option value=""></option>
                </select>
              </div>
              <div className='flex mb-2'>
                <label className='form_label form_label_required'>本文</label>
                <textarea className='newTopic_input h-24' placeholder='500文字以内'/>
              </div>
            </div>
          </form>
          <button className='btn form_btn'>作成</button>
      </div>
    </div>
  )
}

export default NewTopics
