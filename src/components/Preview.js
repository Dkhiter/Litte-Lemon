import {Link} from 'react-router-dom';

export default function Preview(){
  return (
    <section className='preview'>
      <section className='about'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse ipsum perferendis praesentium quam
              totam. Assumenda provident, repudiandae. Aspernatur ea eaque hic impedit ipsum magnam numquam odit, optio
              sequi tempore.
          </p>
        <button>
            <Link to={'/book'}>Reserve a table</Link>
        </button>
      </section>
      <section className='previewImage'>
        <img src='./pictures/previewImage.jpg' alt='preview' />
      </section>
    </section>
  )
}