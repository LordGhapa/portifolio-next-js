const OriginalModal = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {/* ModalTrigger */}

      <div>
        <label
          htmlFor="tw-modal"
          className="cursor-pointer rounded bg-black py-4 text-white active:bg-slate-400"
        >
          Open Modal
        </label>
      </div>

      {/* hidden toggle */}

      <input
        type="checkbox"
        name="tw-modal"
        id="tw-modal"
        className="peer fixed appearance-none opacity-0"
      />

      {/* Modal */}
      <label
        htmlFor="tw-modal"
        className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
      >
        {/* box modal */}
        <label className="h-fit max-h-[calc(100vh-5em)] w-80 max-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black  shadow-2xl transition">
          <label
            htmlFor="tw-modal"
            className="absolute right-3 top-2 cursor-pointer"
          >
            x
          </label>
          <h3 className="text-lg font-bold">ola</h3>
          <p className="py-4">pao</p>
        </label>
      </label>
    </div>
  );
};

export default OriginalModal;
