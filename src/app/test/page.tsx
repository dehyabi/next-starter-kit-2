async function getData() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/poster`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-App-Key": process.env.X_APP_KEY,
      },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  
  export default async function Page() {
    const data = await getData();
  
    console.log(data);
  
    return (
      <>
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
            {data.data.map((poster) => (
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
                  <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">
                    EDIT
                  </button>
                  <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3">
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  