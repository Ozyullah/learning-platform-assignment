import React from 'react';

const Blog = () => {
    return (
        <div >
            <div className="artboard artboard-horizontal phone-1 bg-blue-300 rounded-3xl p-5">
                <div>
                    <h1 className='text-center text-xl font-semibold'>what is cors?</h1>
                </div>
                <div>
                    <p>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.
                    </p>
                    <p>
                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
                    </p>
                </div>
            </div>



{/* Answere two */}
            <div className="artboard artboard-horizontal phone-1 bg-blue-300 rounded-3xl p-5">
                <div>
                    <h1 className='text-center text-xl font-semibold'> Why are you using firebase?</h1>
                </div>
                <div>
                    <p>It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.
                    </p>
                    <h1 className='text-center text-xl font-semibold'>What other options do you have to implement authentication?</h1>
                    <p>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more
                    </p>
                </div>
            </div>


{/* Answere three */}
            <div className="artboard artboard-horizontal phone-1 bg-blue-300 rounded-3xl p-5">
                <div>
                    <h1 className='text-center text-xl font-semibold'> How does the private route work?</h1>
                </div>
                <div>
                    <p>
                    The private route component is used to protect selected pages in a React app from unauthenticated users.
                    </p>
                    <p>
                    Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

In this article, we can see. How to create public and private routes using react-router for your react apps
                    </p>
                </div>
            </div>


{/* Answere four */}

            <div className="artboard artboard-horizontal phone-1 bg-blue-300 rounded-3xl p-5">
                <div>
                    <h1 className='text-center text-xl font-semibold'>What is Node?</h1>
                </div>
                <div>
                    <p>
                    Node.js is a JavaScript runtime for building server-side or desktop applications.
                    </p>
                    <h1 className='text-center text-xl font-semibold'>How does Node work?</h1>
                    <p>
                    Node.js is made of Chrome V8 engine which is written in C++ and Libuv which is a multi-platform C library that provides support for asynchronous I/O based events on event loops and thread loops. An important thing that we need to remember is that, even though Node.js is made using the V8 engine and Libuv which are written in C or C++, we can still use Node.js in pure JavaScript.
                    
                    </p>
                </div>
                <p className="artboard artboard-horizontal phone-1 bg-blue-300 rounded-md p-5">
                So now that, we have learned about the Node.js architecture, it’s time to learn how a Node.js application runs and this part includes the concept of Node.js being single-threaded and its non-blocking nature as well. So, first of all, what is a thread? A thread in simple terms is basically a set of programming instructions that can be run independently in a computer’s processor and every process that we want to run has its own thread to run the programming instructions and the process can have more than one thread.
                </p>
            </div>
        </div>
    );
};

export default Blog;