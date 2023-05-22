const Blogs = () => {
  return (
    <div className="space-y-6 h-screen pt-20 mb-20">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-yellow-100 rounded-lg"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content space-y-6">
          <div className="space-y-2">
            <p>
              An access token and refresh token are commonly used in
              authentication and authorization systems.
            </p>
            <p>
              <span className="font-semibold text-lg">Access Token:</span> An
              access token is a credential that grants the holder access to
              protected resources. It is typically issued by an authentication
              server when a user successfully authenticates.
            </p>
            <p>
              <span className="font-semibold text-lg">Refresh Token:</span> A
              refresh token is a credential used to obtain a new access token
              without requiring the user to reauthenticate. It is issued
              alongside the access token and has a longer expiration time.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-bold">Sotrage Of Tokens:</p>
            <p>
              <span className="font-semibold">Access Token</span> should be
              securely stored on the client-side, typically in memory or a
              secure storage mechanism provided by the operating system.
            </p>
            <p>
              <span className="font-semibold">Refresh Token</span>, on the other
              hand, should be stored securely and persistently on the
              client-side. This can be done by using a secure cookie, encrypted
              storage, or other secure mechanisms.
            </p>
          </div>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-blue-100 rounded-lg"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="mb-8">
            SQL and NoSQL databases are two different approaches to storing and
            retrieving data. Here are some comprasion between these two
            database:
          </p>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SQL Databases</th>
                  <th>NoSQL Databases</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    1. SQL databases are based on a relational data model.
                  </td>
                  <td>
                    1. NoSQL databases provide a flexible and schema-less
                    approach to data storage.
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                    2. They use a schema to define the structure of the data,{" "}
                    <br />
                    including tables, columns etc.
                  </td>
                  <td>
                    2. They use various data models, such as key-value, <br />
                    document, columnar, or graph, to organize and represent
                    data.
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>
                    3. They are suitable for applications with complex and{" "}
                    <br />
                    structured data that require strict consistency.
                  </td>
                  <td>
                    3. NoSQL databases are well-suited for handling unstructured
                    or semi-structured data.
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>
                    4. Popular SQL databases include MySQL, PostgreSQL, <br />
                    Oracle, and SQL Server.
                  </td>
                  <td>
                    4. Examples of NoSQL databases include MongoDB, Cassandra,
                    Redis, and Elasticsearch.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-yellow-100 rounded-lg"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <div className="flex gap-4">
            <div className="w-1/2 border-2 border-blue-600">
              <h2 className="text-xl font-semibold border-b-2 border-red-500 text-center py-2">
                Express JS:
              </h2>
              <p className="text-lg p-4">
                Express.js is a popular web application framework for Node.js.
                It provides a simple and minimalistic approach to building web
                applications and APIs. Express.js allows developers to define
                routes, handle HTTP requests and responses, and implement
                middleware for processing requests.
              </p>
            </div>
            <div className="w-1/2 border-2 border-blue-600">
              <h2 className="text-xl font-semibold border-b-2 border-red-500 text-center py-2">
                Nest JS:
              </h2>
              <p className="text-lg p-4">
                NestJS is a progressive Node.js framework for building efficient
                and scalable server-side applications. It is built on top of
                Express.js and incorporates concepts from Angular, such as
                dependency injection and decorators.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-blue-100 rounded-lg"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="my-6 text-lg">
            In MongoDB, the aggregate function is used to perform advanced data
            processing and analysis operations on the data stored in a
            collection.
          </p>
          <p className="text-lg">
            <span className="font-semibold">Working Method:</span> The MongoDB
            aggregate function works by processing data through a series of
            stages defined in an aggregation pipeline. Each stage operates on
            the data and passes the transformed output to the next stage in the
            pipeline. <br />
            The aggregate function in MongoDB processes data through a series of
            stages defined in an aggregation pipeline. Each stage operates on
            the data, passing the transformed output to the next stage. This
            allows for complex data manipulations and analysis, generating
            customized results. The pipeline is executed sequentially on the
            server, and the resulting output is returned as a cursor for further
            processing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
