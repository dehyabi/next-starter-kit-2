import { Inter } from "next/font/google";
import axios from "@/lib/axios";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });


export async function getServerSideProps() {

  const req = await axios.get(
    `${process.env.BACKEND_URL}/api/v1/poster`
  );
  const res = await req.data.data;
  return {
    props: {
      posters: res,
    },
  };
}
function PosterIndex(props) {
  const { posters } = props;

  console.log('test: ', posters);
  return (
    <>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body">
                <Link href="/posters/create">
                  <button
                    className="btn btn-primary border-0 shadow-sm mb-3"
                  >
                    TAMBAH
                  </button>
                </Link>
                <table className="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th scope="col">IMAGE</th>
                      <th scope="col">JUDUL</th>
                      <th scope="col">CONTENT</th>
                      <th scope="col">AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posters.map((poster) => (
                      <tr key={poster.id}>
                        <td className="text-center">
                        <img
                            src={`${process.env.BACKEND_URL}/storage/poster/${poster.media_img}`}
                            width="150"
                            className="rounded-3"
                          />
                    </td>
                        <td>{poster.title}</td>
                        <td>{poster.desc}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3"
                          >
                            EDIT
                          </button>
                          <button
                            className="btn btn-sm btn-danger border-0 shadow-sm mb-3"
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PosterIndex;
