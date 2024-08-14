import step1img from "@/assets/images/ck_get.png";
import step2img from "@/assets/images/step2.png";
import step3img from "@/assets/images/step3.png";
import step3_2img from "@/assets/images/step3_2.png";
import step4img from "@/assets/images/step4.png";

const steps = [
  {
    step: 1,
    title: "Get Your WooCommerce Consumer Key (CK) and Consumer Secret (CS)",
    content:
      "To connect your WooCommerce store with StoreKool, you’ll need to obtain the Consumer Key (CK) and Consumer Secret (CS) from your WooCommerce store. These keys allow StoreKool to securely communicate with your store’s data. Follow these simple steps to get your CK and CS: ",
    details: `<ol>
  <li><strong>Log into Your WooCommerce Store:</strong>
    <ul>
      <li>Access your WooCommerce admin dashboard by logging in with your admin credentials.</li>
    </ul>
  </li>
  
  <li><strong>Navigate to API Settings:</strong>
    <ul>
      <li>In the WooCommerce dashboard, go to <em>WooCommerce &gt; Settings</em>.</li>
      <li>Click on the <strong>Advanced</strong> tab.</li>
      <li>Under the Advanced tab, find and click on <strong>REST API</strong>.</li>
    </ul>
  </li>
  
  <li><strong>Create a New API Key:</strong>
    <ul>
      <li>Click on the <strong>Add Key</strong> button.</li>
      <li>Provide a description for the key (e.g., "StoreKool Integration").</li>
      <li>Set the Permissions to <strong>Read/Write</strong> so StoreKool can manage products and orders.</li>
      <li>Click on <strong>Generate API Key</strong>.</li>
    </ul>
  </li>
  
  <li><strong>Copy Your CK and CS:</strong>
    <ul>
      <li>Once the key is generated, you’ll see the Consumer Key and Consumer Secret displayed.</li>
      <li>Copy both keys and store them in a secure place.</li>
    </ul>
  </li>
</ol>
`,
    image: [step1img],
  },
  {
    step: 3,
    title: "Adding a store",
    content:
      "To manage your WooCommerce stores within StoreKool, you first need to add them to the application. Follow these steps to successfully add your store:",
    details: `<ol>
  <li><strong>Navigate to Add Store</strong>
    <ul>
      <li>On the dashboard, locate and click on the "Add Store" button. This will take you to the store addition page.</li>
    </ul>
  </li>
  <li><strong>Enter Store Details</strong>
    <ul>
      <li><strong>Shop URL:</strong> Enter the full URL of your WooCommerce store. This should be the base URL of your online shop (e.g., <code>https://yourshop.com</code>).</li>
      <li><strong>Shop Name:</strong> Provide a name for your store. This is how your store will be identified within StoreKool.</li>
      <li><strong>Consumer Key (CK):</strong> Enter the WooCommerce API Consumer Key. You can generate this key in your WooCommerce store's settings under the API or REST API section.</li>
      <li><strong>Consumer Secret (CS):</strong> Enter the WooCommerce API Consumer Secret. This is generated along with the Consumer Key and is necessary for secure API communication.</li>
    </ul>
  </li>
  <li><strong>Submit Information</strong>
    <ul>
      <li>After filling in all the required details, click the "Submit" button.</li>
      <li>Upon successful submission, your store will be added to StoreKool, and it will appear in the sidebar for easy access.</li>
    </ul>
  </li>
</ol>
`,
    image: [step3img, step3_2img],
  },
];

const steps2 = [
  {
    step: 2,
    title: "Logging In",
    content:
      "To start using StoreKool, you'll need to log in to your account. The login process is straightforward, allowing you to access your dashboard where you can manage all your WooCommerce stores. Here's how to log in: ",
    details: `<ol>
  <li><strong>Access the StoreKool Login Page</strong>
    <ul>
      <li><strong>Open Your Web Browser:</strong> Launch your preferred web browser (e.g., Chrome, Firefox, Safari).</li>
      <li><strong>Navigate to the Login Page:</strong> In the address bar, type in the URL for the StoreKool login page (e.g., <a href="https://yourStoreKoolapp.com/login">https://yourStoreKoolapp.com/login</a>) and press Enter.</li>
    </ul>
  </li>
  <li><strong>Enter Your Credentials</strong>
    <ul>
      <li><strong>Email and Password:</strong>
        <ul>
          <li><strong>Registered Email:</strong> In the email field, enter the email address you used when registering for your StoreKool account.</li>
          <li><strong>Password:</strong> In the password field, enter your secure password.</li>
          <li><strong>Forgot Password:</strong> If you've forgotten your password, click on the "Forgot Password?" link to initiate the password recovery process. You'll receive an email with instructions on how to reset your password.</li>
        </ul>
      </li>
      <li><strong>Alternative Login with Google:</strong>
        <ul>
          <li>If you prefer, you can log in using your Google account.</li>
          <li><strong>Click the "Log in with Google" Button:</strong> This will redirect you to Google's authentication page.</li>
          <li><strong>Authorize Access:</strong> Select the Google account you wish to use, and authorize StoreKool to access your account. Once authorized, you’ll be automatically logged in to StoreKool.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Access the StoreKool Dashboard</strong>
    <ul>
      <li><strong>Successful Login:</strong> Upon successfully entering your credentials, you’ll be redirected to the StoreKool dashboard.</li>
      <li><strong>Dashboard Overview:</strong> The dashboard serves as the central hub for managing your WooCommerce stores. Here, you’ll see options to add new stores, manage existing ones, and perform various tasks like product and order management.</li>
    </ul>
  </li>
</ol>
`,
    image: [step2img],
  },
  {
    step: 4,
    title: "Managing Store",
    content:
      "Once you have added your WooCommerce stores to StoreKool, you can easily manage and view them from the dashboard. Follow these steps to effectively manage your connected stores:",
    details: `<ol>
  <li><strong>Viewing Store</strong>
    <ul>
      <li>Sidebar Navigation: All your connected stores will be listed in the sidebar.</li>
      <li>Select a Store: Click on the store name to view its details.</li>
    </ul>
  </li>
  </ol>`,
    image: [step4img],
  },
];

export { steps, steps2 };
