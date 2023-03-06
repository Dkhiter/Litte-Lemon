export default function Specials(){
  return(
    <section className='specials'>
      <header>
        <h1>Specials</h1>
        <button>
          Online Menu
        </button>
      </header>
      <section className='cards'>
        <section>
          <figure className='image'></figure>
          <section className='desc'>
            <p><b>Greek Salad</b>$12.99</p>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad deserunt natus nemo quasi
                repellat soluta? A asperiores culpa deleniti dolorum excepturi facere nisi. Officiis, porro, unde. Eum,
                incidunt!
              </p>
            </article>
            <p>Order a delivery <span>&#x1F6F5;</span></p>
          </section>
        </section>
        <section>
          <figure className="image"></figure>
          <section className='desc'>
            <p><b>Bruschetta</b>$5.90</p>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque aut, commodi consectetur
                delectus dolore eaque, eos, hic iste libero modi nihil praesentium temporibus veniam veritatis
                voluptatem voluptatum. Sequi?</p>
            </article>
            <p>Order a delivery <span>&#x1F6F5;</span></p>
          </section>
        </section>
        <section>
          <figure className='image'></figure>
          <section className='desc'>
            <p><b>Lemon Dessert</b>$4.99</p>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet animi asperiores,
                debitis est, hic illum maxime minima nemo odio optio quam qui rerum sequi tempore temporibus voluptatum?
                Iusto.</p>
            </article>
            <p>Order a delivery <span>&#x1F6F5;</span></p>
          </section>
        </section>
      </section>
    </section>
  )
}