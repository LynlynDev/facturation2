
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter()

  const navigatePage=()=> router.push('/add-new')
  return (
  <div className="main__container">
    <div className="invoice__header">
      <div className="invoice__header-logo">
        <h3>Invoice</h3>
        <p>There are total 7 invoices</p>
      </div>

      <button className="btn" onClick={navigatePage}>
        Add New
      </button>
    </div>
    <div className="invoice__container">
      { /* ======invoice item====== */ }
      <Link href={`/invoice/id`} passHref>
        <div className="invoice__item">
          <div>
            <h5 className="invoice__id">RT59F0</h5>
          </div>

          <div>
            <h6 className="invoice__client">Monkam Braselin</h6>
          </div>

          <div>
            <p className="invoice__created">29-07-2022</p>
          </div>

          <div>
            <h3 className="invoice__total">$567</h3>
          </div>

          <div>
            <button className="pending__status">Pending</button>
          </div>
        </div>
      </Link>
    </div>
  </div>
  );
}