import { AiOutlineSend } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";
import { motion } from "framer-motion";
import styles from "~/styles/form.module.css";
import { useState } from "react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";

export default function ContactForm() {
  const {state } = useNavigation();
  const [tappedIcon, setTappedIcon] = useState<boolean>(false);
  const manageTap = (state: boolean) => {
    setTappedIcon(state);
    setTimeout(() => setTappedIcon(false), 300);
  };
  return (
    <Form className="my-6 flex w-full flex-col gap-5" method="post">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex w-full flex-col">
          <div className="flex items-center gap-1">
            <label className={styles.contactLabel} htmlFor="name">
              Name
            </label>
            <div className="text-red-500 dark:text-red-700">*</div>
          </div>
          <input
            className={styles.contactInput}
            id="name"
            name="name"
            required
            type="text"
          />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex items-center gap-1">
            <label className={styles.contactLabel} htmlFor="company">
              Company
            </label>
          </div>
          <input
            className={styles.contactInput}
            id="company"
            name="company"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex w-full flex-col">
          <div className="flex items-center gap-1">
            <label className={styles.contactLabel} htmlFor="email">
              Email
            </label>
            <div className="text-red-500 dark:text-red-700">*</div>
          </div>
          <input
            className={styles.contactInput}
            id="email"
            name="email"
            required
            type="email"
          />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex items-center gap-1">
            <label className={styles.contactLabel} htmlFor="subject">
              Subject
            </label>
            <div className="text-red-500 dark:text-red-700">*</div>
          </div>
          <input
            className={styles.contactInput}
            id="subject"
            name="subject"
            required
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex w-full flex-col">
          <div className="flex items-center gap-1">
            <label className={styles.contactLabel} htmlFor="message">
              Message
            </label>
            <div className="text-red-500 dark:text-red-700">*</div>
          </div>
          <textarea
            className={styles.contactInput}
            id="message"
            name="message"
            required
            rows={8}
          />
        </div>
      </div>
      <div className="flex">
        <motion.div
          animate={{
            scale: tappedIcon ? [0.9, 1.1, 1] : 1,
          }}
          onClick={() => manageTap(true)}
        >
          <button className={styles.contactSubmit} type="submit">
            {state === "submitting" ? (
              <span className="flex items-center justify-center gap-3">
                Sending
                <CgSpinner className="animate-spin" size="1.4rem" />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                Send
                <AiOutlineSend />
              </span>
            )}
          </button>
        </motion.div>
      </div>
      <br />
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  // omitted for brevity
}
