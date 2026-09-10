import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as f}from"./PythonFileLoader-CiS1GfkF.js";import{F as g}from"./FAQTemplate-D_90hN4m.js";import{P as y}from"./PlainTextPrint-yt10TRX1.js";import{T as _}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const N=`"""\r
01_sensor_data_pipeline_creation.py\r
===================================\r
Worked Example 1: Ingesting & Structuring IoT Sensor Stream into 3D Batch Tensors\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 1: IOT SENSOR DATA INGESTION & 3D RESHAPING")\r
    print("=" * 70)\r
\r
    # Problem Statement:\r
    # A Barrackpore weather station records 3 sensors: [Temperature, Humidity, AQI]\r
    # every hour (24 hours/day) for 7 days.\r
    # The sensor telemetry arrives as a continuous 1D raw stream of 7 * 24 * 3 = 504 float values.\r
    \r
    total_days = 7\r
    hours_per_day = 24\r
    num_sensors = 3\r
    total_readings = total_days * hours_per_day * num_sensors  # 504\r
\r
    # 1. Simulate Raw 1D Stream Ingestion using np.linspace & arange\r
    raw_stream = np.linspace(start=10.0, stop=95.0, num=total_readings)\r
    print(f"1. Raw Ingested Stream: Shape {raw_stream.shape}, Total Elements: {raw_stream.size}")\r
    print("   First 6 raw readings:", np.round(raw_stream[:6], 2))\r
\r
    # 2. Reshape into 3D Structured Tensor (Days, Hours, Sensors)\r
    # Shape: (7, 24, 3)\r
    sensor_tensor = raw_stream.reshape((total_days, hours_per_day, num_sensors))\r
    print(f"\\n2. Structured 3D Sensor Tensor Shape: {sensor_tensor.shape}")\r
    print(f"   Dimensions (ndim): {sensor_tensor.ndim}")\r
    print(f"   Memory layout flags:\\n     C_CONTIGUOUS: {sensor_tensor.flags.c_contiguous}")\r
\r
    # 3. Querying Subsets:\r
    # Day 0, Hour 12 (Noon), All 3 Sensors\r
    day0_noon = sensor_tensor[0, 12, :]\r
    print(f"\\n3. Day 1 Noon Readings [Temp, Humidity, AQI]: {np.round(day0_noon, 2)}")\r
\r
    # Extract all 7 days for Sensor 0 (Temperature) across 24 hours -> (7, 24)\r
    all_temp_grid = sensor_tensor[:, :, 0]\r
    print(f"4. 7-Day Temperature Matrix Shape: {all_temp_grid.shape} (Days x Hours)")\r
\r
    # 4. Flattening back for downstream batch ML inference\r
    # Reshape to (N_samples=168 hours, 3 features)\r
    batch_features = sensor_tensor.reshape(-1, num_sensors)\r
    print(f"5. Downstream ML 2D Batch Shape: {batch_features.shape} (168 hourly samples, 3 features)")\r
    assert batch_features.shape == (168, 3)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
02_multidimensional_image_batch_reshape.py\r
==========================================\r
Worked Example 1: Computer Vision Batch Tensor Reshaping (MNIST / CIFAR-10)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 1: COMPUTER VISION IMAGE BATCH RESHAPING")\r
    print("=" * 70)\r
\r
    # Problem:\r
    # 100 grayscale handwritten digits (MNIST-style) loaded from flat binary CSV file.\r
    # Each image has 28 x 28 = 784 pixel values.\r
    # Total flat vector size: 100 * 784 = 78,400 floats.\r
    num_images = 100\r
    height = 28\r
    width = 28\r
    channels = 1\r
\r
    # 1. Ingest flat pixel array\r
    raw_pixels = np.random.randint(0, 256, size=num_images * height * width, dtype=np.uint8)\r
    print(f"1. Raw Flat Pixels Array: Shape {raw_pixels.shape}, Size: {raw_pixels.size} bytes")\r
\r
    # 2. Reshape for Convolutional Neural Network (CNN)\r
    # Shape: (Batch_Size, Height, Width, Channels) => (100, 28, 28, 1)\r
    cnn_batch = raw_pixels.reshape((num_images, height, width, channels))\r
    print(f"\\n2. CNN Input Tensor Shape: {cnn_batch.shape}")\r
    print(f"   Image 0 shape: {cnn_batch[0].shape}")\r
\r
    # 3. Reshape for Multi-Layer Perceptron (Dense / Fully-Connected Classifier)\r
    # Shape: (Batch_Size, 784)\r
    dense_batch = cnn_batch.reshape(num_images, -1)\r
    print(f"\\n3. Flattened Dense Input Shape: {dense_batch.shape} (N=100, Features=784)")\r
\r
    # 4. Transpose Channel Ordering (NHWC -> NCHW for PyTorch compatibility)\r
    # (100, 28, 28, 1) -> (100, 1, 28, 28)\r
    nchw_batch = np.transpose(cnn_batch, (0, 3, 1, 2))\r
    print(f"\\n4. PyTorch NCHW Format Shape: {nchw_batch.shape}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
03_c_vs_fortran_order_transformations.py\r
========================================\r
Worked Example 1: Memory Strides, C-Contiguous vs Fortran Order in Reshaping\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 1: MEMORY CONTIGUITY & ORDERING IN RESHAPING")\r
    print("=" * 70)\r
\r
    # 1. Base 1D Array of student IDs\r
    arr_1d = np.arange(1, 13)\r
    print("Base 1D Array (1 to 12):\\n", arr_1d)\r
\r
    # 2. Reshaping with default C-Order (Row-Major: fills row 0, then row 1...)\r
    c_reshaped = arr_1d.reshape((3, 4), order='C')\r
    print("\\n1. C-Order Reshape (3x4):\\n", c_reshaped)\r
    print("   Row 0:", c_reshaped[0])\r
    print("   Row 1:", c_reshaped[1])\r
\r
    # 3. Reshaping with Fortran-Order (Column-Major: fills col 0, then col 1...)\r
    f_reshaped = arr_1d.reshape((3, 4), order='F')\r
    print("\\n2. Fortran-Order Reshape (3x4):\\n", f_reshaped)\r
    print("   Col 0:", f_reshaped[:, 0])\r
    print("   Col 1:", f_reshaped[:, 1])\r
\r
    # 4. Memory Strides Inspection\r
    print("\\n3. Memory Strides Analysis (bytes to jump per axis):")\r
    print(f"   C-Order strides: {c_reshaped.strides} -> (jump 16 bytes for next row, 4 for next col)")\r
    print(f"   F-Order strides: {f_reshaped.strides} -> (jump 4 bytes for next row, 12 for next col)")\r
\r
    # 5. Shared Memory (Views)\r
    c_reshaped[0, 0] = 999\r
    print("\\n4. Modifying c_reshaped[0, 0] = 999:")\r
    print("   Base 1D array is modified (Shared View!):", arr_1d[:3])\r
    assert arr_1d[0] == 999\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`========================================================================\r
TOPIC 17 NOTE: WORKED EXAMPLE 1 - CREATING & RESHAPING ARRAYS\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. CASE STUDY 1: MULTI-CHANNEL IOT SENSOR STREAM\r
-------------------------------------------------\r
- Context:\r
  Barrackpore environmental monitor collects 3 real-time metrics (Temperature °C, Relative Humidity %, AQI) every hour for 7 days.\r
- Data Volume:\r
  7 Days * 24 Hours/Day * 3 Features = 504 contiguous telemetry readings.\r
- Tensor Structuring:\r
  \`stream = np.linspace(10, 95, 504)\`\r
  \`tensor_3d = stream.reshape((7, 24, 3))\`\r
  \`ml_batch_2d = tensor_3d.reshape(-1, 3)\` (168 hourly time steps, 3 features).\r
\r
2. CASE STUDY 2: COMPUTER VISION BATCH RESHAPING\r
-------------------------------------------------\r
- Grayscale MNIST pipeline:\r
  (N * 28 * 28) flat array -> \`(N, 28, 28, 1)\` for 2D ConvNet -> \`(N, 784)\` for Softmax Dense Classifier.\r
- Dimension transposition:\r
  TensorFlow / Keras standard: \`(Batch, Height, Width, Channels)\` (NHWC)\r
  PyTorch standard: \`(Batch, Channels, Height, Width)\` (NCHW)\r
  Convert with: \`np.transpose(img_batch, (0, 3, 1, 2))\`.\r
\r
3. MEMORY CONSTRAINTS & ORDERING\r
---------------------------------\r
- Total element count MUST match:\r
  Product of new dimensions (d_1 * d_2 * ... * d_k) MUST EQUAL total size N.\r
- Using \`-1\` wildcard:\r
  NumPy infers the unspecified dimension automatically: \`arr.reshape(7, -1)\` divides total size by 7.\r
- Memory Views vs Copies:\r
  Reshaping an array returns a zero-copy view with modified shape metadata and strides whenever data is contiguous.\r
`,v=[{id:1,question:"In Worked Example 1, a 1D stream of 504 sensor values is reshaped into (7, 24, 3). What does each dimension index represent?",options:["Axis 0: Days (7), Axis 1: Hours per day (24), Axis 2: Environmental sensors (3).","Axis 0: Sensors (7), Axis 1: Days (24), Axis 2: Hours (3).","Axis 0: Hours (7), Axis 1: Sensors (24), Axis 2: Days (3).","Axis 0: Batches (504), Axis 1: Sensors (1), Axis 2: None."],correctAnswer:0,explanation:"The shape (7, 24, 3) structures the array hierarchically: 7 outer days, 24 hourly time steps per day, and 3 specific sensor channels (Temperature, Humidity, AQI) per hour."},{id:2,question:"If an array has 504 elements, why does calling `arr.reshape(7, 25, 3)` raise a ValueError?",options:["Because 7 is a prime number.","Because 7 * 25 * 3 = 525, which exceeds the total element count of 504.","Because 3D reshaping is not supported for float arrays.","Because 25 is greater than 24."],correctAnswer:1,explanation:"Array reshaping requires the total number of elements to remain exactly invariant. The product of dimensions in the new shape must equal the original array size (504 != 525)."},{id:3,question:"How does the `-1` dimension argument behave in `tensor_3d.reshape(-1, 3)` for a tensor with 504 total elements?",options:["It deletes the first dimension.","It automatically calculates the missing dimension as 504 / 3 = 168, yielding shape (168, 3).","It reverses the rows of the array.","It fills missing elements with -1."],correctAnswer:1,explanation:"Passing -1 tells NumPy to deduce that dimension size based on the total elements in the array and the other specified dimensions (504 / 3 = 168)."},{id:4,question:"What is the difference between C-order (row-major) and Fortran-order (column-major) reshaping?",options:["C-order reads/writes along the last axis first (row-wise), while Fortran-order reads/writes along the first axis first (column-wise).","C-order is for integers and Fortran-order is for complex numbers.","C-order always creates copies, while Fortran-order creates views.","There is no difference in modern NumPy."],correctAnswer:0,explanation:"C-contiguous arrays increment memory addresses along the last dimension first (row by row), whereas Fortran-contiguous arrays increment along the first dimension first (column by column)."},{id:5,question:"To convert an image batch from TensorFlow format (100, 28, 28, 1) [NHWC] to PyTorch format (100, 1, 28, 28) [NCHW], which function must be used?",options:["np.reshape(batch, (100, 1, 28, 28))","np.transpose(batch, (0, 3, 1, 2))","np.vstack(batch)","np.split(batch, 1)"],correctAnswer:1,explanation:"`np.transpose(batch, (0, 3, 1, 2))` permutes the axes so that Axis 3 (channels) moves to Axis 1. Calling `reshape` directly would interleave spatial pixels incorrectly instead of transposing channel axes!"}],l=[{id:"part1",fileName:"01_sensor_data_pipeline_creation.py",title:"1. Sensor Stream 3D Ingestion Pipeline",badge:"IoT 3D Pipeline",code:N,summary:"Ingests 504 raw sensor values into (7 Days, 24 Hours, 3 Sensors), extracts sub-slices, and flattens for ML feature matrices."},{id:"part2",fileName:"02_multidimensional_image_batch_reshape.py",title:"2. Computer Vision Batch Reshaping",badge:"Vision Reshaping",code:w,summary:"Structures flat MNIST pixel streams into 4D CNN tensors (100, 28, 28, 1), flattens for Dense classifiers, and transposes to PyTorch NCHW."},{id:"part3",fileName:"03_c_vs_fortran_order_transformations.py",title:"3. Memory Strides & C vs Fortran Ordering",badge:"Memory Strides",code:j,summary:"Examines row-major (C) vs column-major (Fortran) memory ordering, stride byte steps, and shared memory view mutations."}],M=()=>{const[a,c]=o.useState("worked_example_walkthrough"),[d,m]=o.useState("part1"),[t,p]=o.useState(0),[s,h]=o.useState(12),n=l.find(r=>r.id===d)||l[0],i=10+(t*24+s)*.168,x=parseFloat((i+12).toFixed(1)),u=parseFloat(Math.min(95,i+30).toFixed(1)),b=Math.round(50+i*1.5);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-blue-900/60 via-slate-900 to-teal-900/60 border border-blue-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/40",children:"Topic 17 • Practical Case Study"}),e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Worked Example 1"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-200 via-teal-100 to-cyan-300 bg-clip-text text-transparent",children:"Worked Example 1: Creating & Reshaping Arrays"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:"End-to-end industrial walkthrough: Converting flattened IoT sensor data streams into multi-dimensional 3D tensors, slicing temporal intervals, and reformatting tensor shapes for ML inference."})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"worked_example_walkthrough",label:"Interactive Case Study Walkthrough",icon:"🛰️"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(r=>e.jsxs("button",{onClick:()=>c(r.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a===r.id?"bg-blue-500 text-slate-950 shadow-lg shadow-blue-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:r.icon}),r.label]},r.id))})]}),a==="worked_example_walkthrough"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-blue-300 mb-2",children:"📋 Problem Specification: Barrackpore Weather Station"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed mb-4",children:["A weather monitoring station captures 3 environmental metrics: ",e.jsx("strong",{children:"Temperature (°C)"}),", ",e.jsx("strong",{children:"Relative Humidity (%)"}),", and ",e.jsx("strong",{children:"AQI (Air Quality Index)"})," every hour for 7 full days. The raw hardware buffer yields a continuous 1D telemetry stream of ",e.jsx("code",{className:"text-teal-300 font-mono",children:"7 × 24 × 3 = 504"})," float values."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 block",children:"1. Raw Telemetry Stream:"}),e.jsx("span",{className:"text-blue-300 font-bold text-sm",children:"Shape (504,)"}),e.jsx("span",{className:"text-slate-400 block text-[11px] mt-1",children:"1D Continuous Buffer"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 block",children:"2. Structured Tensor:"}),e.jsx("span",{className:"text-teal-300 font-bold text-sm",children:"Shape (7, 24, 3)"}),e.jsx("span",{className:"text-slate-400 block text-[11px] mt-1",children:"(Days, Hours, Sensors)"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 block",children:"3. ML Model Batch:"}),e.jsx("span",{className:"text-amber-300 font-bold text-sm",children:"Shape (168, 3)"}),e.jsx("span",{className:"text-slate-400 block text-[11px] mt-1",children:"reshape(-1, 3)"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsx("h4",{className:"text-base font-bold text-slate-200",children:"🔍 Interactive Tensor Query: `tensor[day, hour, :]`"}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs font-bold text-blue-300 block mb-2",children:["Select Day: Day ",t+1," (Index ",t,")"]}),e.jsx("div",{className:"grid grid-cols-7 gap-1.5",children:[0,1,2,3,4,5,6].map(r=>e.jsxs("button",{onClick:()=>p(r),className:`p-2 rounded-lg border text-xs font-mono font-bold transition ${t===r?"bg-blue-500 border-blue-400 text-slate-950 shadow-md shadow-blue-500/20":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:["D",r+1]},r))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("label",{className:"text-xs font-bold text-teal-300",children:["Select Hour: ",s,":00 (",s>=12?"PM":"AM",")"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Index ",s]})]}),e.jsx("input",{type:"range",min:"0",max:"23",value:s,onChange:r=>h(Number(r.target.value)),className:"w-full accent-teal-500 h-2 bg-slate-800 rounded-lg cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"00:00 (Midnight)"}),e.jsx("span",{children:"12:00 (Noon)"}),e.jsx("span",{children:"23:00 (11 PM)"})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300",children:[e.jsx("span",{className:"text-slate-500",children:"Python Query:"})," ",e.jsxs("span",{className:"text-teal-300 font-bold",children:["sensor_tensor[",t,", ",s,", :]"]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-base font-bold text-emerald-300 mb-4",children:["📊 Extracted Telemetry for Day ",t+1," @ ",s,":00"]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-rose-900/40 text-center",children:[e.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"Temperature"}),e.jsxs("span",{className:"text-2xl font-bold font-mono text-rose-400",children:[x,"°C"]}),e.jsx("span",{className:"text-[10px] text-slate-500 block mt-1",children:"Sensor Index 0"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-cyan-900/40 text-center",children:[e.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"Humidity"}),e.jsxs("span",{className:"text-2xl font-bold font-mono text-cyan-400",children:[u,"%"]}),e.jsx("span",{className:"text-[10px] text-slate-500 block mt-1",children:"Sensor Index 1"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-900/40 text-center",children:[e.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"Air Quality (AQI)"}),e.jsx("span",{className:"text-2xl font-bold font-mono text-amber-400",children:b}),e.jsx("span",{className:"text-[10px] text-slate-500 block mt-1",children:"Sensor Index 2"})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-950/30 border border-blue-900/60 rounded-xl text-xs text-slate-300",children:[e.jsx("span",{className:"text-blue-300 font-bold block mb-1",children:"💡 Reshaping Invariant:"}),"Original stream ",e.jsx("code",{className:"text-blue-200",children:"504"})," elements = ",e.jsx("code",{className:"text-blue-200",children:"7 × 24 × 3"}),". No data is duplicated or lost in memory; only dimension pointers and stride offsets are transformed!"]})]})]})]}),a==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:l.map(r=>e.jsxs("button",{onClick:()=>m(r.id),className:`p-4 rounded-xl border text-left transition-all ${d===r.id?"bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30",children:r.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:r.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:r.summary})]},r.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-blue-300",children:n.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:n.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Worked Example 1 Suite"})]}),e.jsx(f,{fileModule:n.code,title:n.fileName})]})]}),a==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(_,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Reshaping is one of the most frequent operations you will perform when bridging raw real-world data pipelines (streams, audio waveforms, image batches) with machine learning architectures. Always verify the total product of shapes and double check whether you need a view (reshape) or a true axis permutation (transpose)."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-blue-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(y,{content:S})]})]}),a==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(g,{questions:v})})]})};export{M as default};
