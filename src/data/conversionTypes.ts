export interface ConversionType {
  id: string;
  from: string[];
  to: string;
  description: string;
  category: string;
}

export const conversionTypes: ConversionType[] = [
  // PDF Conversions
  { id: 'pdf-to-word', from: ['pdf'], to: 'docx', description: 'Convert PDF to editable Word document', category: 'document' },
  { id: 'pdf-to-excel', from: ['pdf'], to: 'xlsx', description: 'Extract tables from PDF to Excel', category: 'document' },
  { id: 'pdf-to-ppt', from: ['pdf'], to: 'pptx', description: 'Convert PDF to PowerPoint presentation', category: 'document' },
  { id: 'pdf-to-txt', from: ['pdf'], to: 'txt', description: 'Extract text from PDF', category: 'document' },
  { id: 'pdf-to-html', from: ['pdf'], to: 'html', description: 'Convert PDF to HTML webpage', category: 'document' },
  { id: 'pdf-to-epub', from: ['pdf'], to: 'epub', description: 'Convert PDF to eBook format', category: 'document' },
  
  // Word Conversions
  { id: 'word-to-pdf', from: ['doc', 'docx'], to: 'pdf', description: 'Convert Word document to PDF', category: 'document' },
  { id: 'word-to-html', from: ['doc', 'docx'], to: 'html', description: 'Convert Word to HTML', category: 'document' },
  { id: 'word-to-txt', from: ['doc', 'docx'], to: 'txt', description: 'Extract text from Word document', category: 'document' },
  { id: 'word-to-epub', from: ['doc', 'docx'], to: 'epub', description: 'Convert Word to eBook format', category: 'document' },
  
  // PowerPoint Conversions
  { id: 'ppt-to-pdf', from: ['ppt', 'pptx'], to: 'pdf', description: 'Convert PowerPoint to PDF', category: 'presentation' },
  { id: 'ppt-to-word', from: ['ppt', 'pptx'], to: 'docx', description: 'Convert PowerPoint to Word document', category: 'presentation' },
  { id: 'ppt-to-html', from: ['ppt', 'pptx'], to: 'html', description: 'Convert PowerPoint to HTML', category: 'presentation' },
  { id: 'ppt-to-images', from: ['ppt', 'pptx'], to: 'zip', description: 'Convert slides to images (ZIP)', category: 'presentation' },
  
  // Excel Conversions
  { id: 'excel-to-pdf', from: ['xls', 'xlsx'], to: 'pdf', description: 'Convert Excel to PDF', category: 'spreadsheet' },
  { id: 'excel-to-csv', from: ['xls', 'xlsx'], to: 'csv', description: 'Convert Excel to CSV', category: 'spreadsheet' },
  { id: 'excel-to-html', from: ['xls', 'xlsx'], to: 'html', description: 'Convert Excel to HTML table', category: 'spreadsheet' },
  
  // Image Conversions
  { id: 'jpg-to-png', from: ['jpg', 'jpeg'], to: 'png', description: 'Convert JPEG to PNG', category: 'image' },
  { id: 'png-to-jpg', from: ['png'], to: 'jpg', description: 'Convert PNG to JPEG', category: 'image' },
  { id: 'png-to-webp', from: ['png'], to: 'webp', description: 'Convert PNG to WebP', category: 'image' },
  { id: 'jpg-to-webp', from: ['jpg', 'jpeg'], to: 'webp', description: 'Convert JPEG to WebP', category: 'image' },
  { id: 'gif-to-mp4', from: ['gif'], to: 'mp4', description: 'Convert GIF to MP4 video', category: 'image' },
  { id: 'svg-to-png', from: ['svg'], to: 'png', description: 'Convert SVG to PNG', category: 'image' },
  { id: 'ico-to-png', from: ['ico'], to: 'png', description: 'Convert ICO to PNG', category: 'image' },
  { id: 'bmp-to-jpg', from: ['bmp'], to: 'jpg', description: 'Convert BMP to JPEG', category: 'image' },
  { id: 'tiff-to-jpg', from: ['tiff', 'tif'], to: 'jpg', description: 'Convert TIFF to JPEG', category: 'image' },
  
  // Audio Conversions
  { id: 'mp3-to-wav', from: ['mp3'], to: 'wav', description: 'Convert MP3 to WAV', category: 'audio' },
  { id: 'wav-to-mp3', from: ['wav'], to: 'mp3', description: 'Convert WAV to MP3', category: 'audio' },
  { id: 'flac-to-mp3', from: ['flac'], to: 'mp3', description: 'Convert FLAC to MP3', category: 'audio' },
  { id: 'aac-to-mp3', from: ['aac'], to: 'mp3', description: 'Convert AAC to MP3', category: 'audio' },
  { id: 'ogg-to-mp3', from: ['ogg'], to: 'mp3', description: 'Convert OGG to MP3', category: 'audio' },
  { id: 'm4a-to-mp3', from: ['m4a'], to: 'mp3', description: 'Convert M4A to MP3', category: 'audio' },
  
  // Video Conversions
  { id: 'mp4-to-avi', from: ['mp4'], to: 'avi', description: 'Convert MP4 to AVI', category: 'video' },
  { id: 'avi-to-mp4', from: ['avi'], to: 'mp4', description: 'Convert AVI to MP4', category: 'video' },
  { id: 'mov-to-mp4', from: ['mov'], to: 'mp4', description: 'Convert MOV to MP4', category: 'video' },
  { id: 'wmv-to-mp4', from: ['wmv'], to: 'mp4', description: 'Convert WMV to MP4', category: 'video' },
  { id: 'flv-to-mp4', from: ['flv'], to: 'mp4', description: 'Convert FLV to MP4', category: 'video' },
  { id: 'webm-to-mp4', from: ['webm'], to: 'mp4', description: 'Convert WebM to MP4', category: 'video' },
  { id: 'mkv-to-mp4', from: ['mkv'], to: 'mp4', description: 'Convert MKV to MP4', category: 'video' },
  
  // Archive Conversions
  { id: 'zip-to-rar', from: ['zip'], to: 'rar', description: 'Convert ZIP to RAR', category: 'archive' },
  { id: 'rar-to-zip', from: ['rar'], to: 'zip', description: 'Convert RAR to ZIP', category: 'archive' },
  { id: '7z-to-zip', from: ['7z'], to: 'zip', description: 'Convert 7Z to ZIP', category: 'archive' },
  
  // Text/Code Conversions
  { id: 'csv-to-json', from: ['csv'], to: 'json', description: 'Convert CSV to JSON', category: 'data' },
  { id: 'json-to-csv', from: ['json'], to: 'csv', description: 'Convert JSON to CSV', category: 'data' },
  { id: 'xml-to-json', from: ['xml'], to: 'json', description: 'Convert XML to JSON', category: 'data' },
  { id: 'yaml-to-json', from: ['yml', 'yaml'], to: 'json', description: 'Convert YAML to JSON', category: 'data' },
  { id: 'html-to-pdf', from: ['html'], to: 'pdf', description: 'Convert HTML to PDF', category: 'document' },
  { id: 'md-to-html', from: ['md'], to: 'html', description: 'Convert Markdown to HTML', category: 'document' },
  { id: 'md-to-pdf', from: ['md'], to: 'pdf', description: 'Convert Markdown to PDF', category: 'document' },
  
  // eBook Conversions
  { id: 'epub-to-pdf', from: ['epub'], to: 'pdf', description: 'Convert EPUB to PDF', category: 'ebook' },
  { id: 'epub-to-mobi', from: ['epub'], to: 'mobi', description: 'Convert EPUB to MOBI', category: 'ebook' },
  { id: 'mobi-to-epub', from: ['mobi'], to: 'epub', description: 'Convert MOBI to EPUB', category: 'ebook' },
  { id: 'azw-to-epub', from: ['azw'], to: 'epub', description: 'Convert AZW to EPUB', category: 'ebook' },
  
  // CAD/Design Conversions
  { id: 'dwg-to-pdf', from: ['dwg'], to: 'pdf', description: 'Convert AutoCAD DWG to PDF', category: 'design' },
  { id: 'psd-to-png', from: ['psd'], to: 'png', description: 'Convert Photoshop PSD to PNG', category: 'design' },
  { id: 'ai-to-pdf', from: ['ai'], to: 'pdf', description: 'Convert Illustrator AI to PDF', category: 'design' },
  
  // Additional Document Conversions
  { id: 'rtf-to-pdf', from: ['rtf'], to: 'pdf', description: 'Convert RTF to PDF', category: 'document' },
  { id: 'rtf-to-docx', from: ['rtf'], to: 'docx', description: 'Convert RTF to Word', category: 'document' },
  { id: 'odt-to-pdf', from: ['odt'], to: 'pdf', description: 'Convert OpenDocument Text to PDF', category: 'document' },
  { id: 'odt-to-docx', from: ['odt'], to: 'docx', description: 'Convert OpenDocument Text to Word', category: 'document' },
  { id: 'pages-to-pdf', from: ['pages'], to: 'pdf', description: 'Convert Apple Pages to PDF', category: 'document' },
  { id: 'pages-to-docx', from: ['pages'], to: 'docx', description: 'Convert Apple Pages to Word', category: 'document' },
  { id: 'tex-to-pdf', from: ['tex'], to: 'pdf', description: 'Convert LaTeX to PDF', category: 'document' },
  { id: 'txt-to-pdf', from: ['txt'], to: 'pdf', description: 'Convert plain text to PDF', category: 'document' },
  
  // Additional Spreadsheet Conversions
  { id: 'ods-to-xlsx', from: ['ods'], to: 'xlsx', description: 'Convert OpenDocument Spreadsheet to Excel', category: 'spreadsheet' },
  { id: 'ods-to-pdf', from: ['ods'], to: 'pdf', description: 'Convert OpenDocument Spreadsheet to PDF', category: 'spreadsheet' },
  { id: 'numbers-to-xlsx', from: ['numbers'], to: 'xlsx', description: 'Convert Apple Numbers to Excel', category: 'spreadsheet' },
  { id: 'numbers-to-pdf', from: ['numbers'], to: 'pdf', description: 'Convert Apple Numbers to PDF', category: 'spreadsheet' },
  { id: 'csv-to-xlsx', from: ['csv'], to: 'xlsx', description: 'Convert CSV to Excel', category: 'spreadsheet' },
  { id: 'tsv-to-xlsx', from: ['tsv'], to: 'xlsx', description: 'Convert TSV to Excel', category: 'spreadsheet' },
  { id: 'xlsx-to-json', from: ['xlsx'], to: 'json', description: 'Convert Excel to JSON', category: 'data' },
  
  // Additional Presentation Conversions
  { id: 'odp-to-pdf', from: ['odp'], to: 'pdf', description: 'Convert OpenDocument Presentation to PDF', category: 'presentation' },
  { id: 'odp-to-pptx', from: ['odp'], to: 'pptx', description: 'Convert OpenDocument Presentation to PowerPoint', category: 'presentation' },
  { id: 'key-to-pdf', from: ['key'], to: 'pdf', description: 'Convert Apple Keynote to PDF', category: 'presentation' },
  { id: 'key-to-pptx', from: ['key'], to: 'pptx', description: 'Convert Apple Keynote to PowerPoint', category: 'presentation' },
  { id: 'ppt-to-video', from: ['ppt', 'pptx'], to: 'mp4', description: 'Convert PowerPoint to video', category: 'presentation' },
  
  // Additional Image Conversions
  { id: 'heic-to-jpg', from: ['heic'], to: 'jpg', description: 'Convert HEIC to JPEG', category: 'image' },
  { id: 'heif-to-jpg', from: ['heif'], to: 'jpg', description: 'Convert HEIF to JPEG', category: 'image' },
  { id: 'raw-to-jpg', from: ['raw', 'cr2', 'nef', 'arw'], to: 'jpg', description: 'Convert RAW images to JPEG', category: 'image' },
  { id: 'eps-to-png', from: ['eps'], to: 'png', description: 'Convert EPS to PNG', category: 'image' },
  { id: 'pdf-to-jpg', from: ['pdf'], to: 'jpg', description: 'Convert PDF pages to JPEG images', category: 'image' },
  { id: 'pdf-to-png', from: ['pdf'], to: 'png', description: 'Convert PDF pages to PNG images', category: 'image' },
  { id: 'jpg-to-pdf', from: ['jpg', 'jpeg'], to: 'pdf', description: 'Convert JPEG images to PDF', category: 'image' },
  { id: 'png-to-pdf', from: ['png'], to: 'pdf', description: 'Convert PNG images to PDF', category: 'image' },
  { id: 'avif-to-jpg', from: ['avif'], to: 'jpg', description: 'Convert AVIF to JPEG', category: 'image' },
  { id: 'webp-to-png', from: ['webp'], to: 'png', description: 'Convert WebP to PNG', category: 'image' },
  
  // Additional Audio Conversions
  { id: 'wma-to-mp3', from: ['wma'], to: 'mp3', description: 'Convert WMA to MP3', category: 'audio' },
  { id: 'opus-to-mp3', from: ['opus'], to: 'mp3', description: 'Convert Opus to MP3', category: 'audio' },
  { id: 'amr-to-mp3', from: ['amr'], to: 'mp3', description: 'Convert AMR to MP3', category: 'audio' },
  { id: 'mp3-to-flac', from: ['mp3'], to: 'flac', description: 'Convert MP3 to FLAC', category: 'audio' },
  { id: 'wav-to-flac', from: ['wav'], to: 'flac', description: 'Convert WAV to FLAC', category: 'audio' },
  { id: 'aiff-to-mp3', from: ['aiff'], to: 'mp3', description: 'Convert AIFF to MP3', category: 'audio' },
  { id: 'au-to-mp3', from: ['au'], to: 'mp3', description: 'Convert AU to MP3', category: 'audio' },
  { id: 'ra-to-mp3', from: ['ra'], to: 'mp3', description: 'Convert RealAudio to MP3', category: 'audio' },
  
  // Additional Video Conversions
  { id: 'mts-to-mp4', from: ['mts'], to: 'mp4', description: 'Convert MTS to MP4', category: 'video' },
  { id: 'm2ts-to-mp4', from: ['m2ts'], to: 'mp4', description: 'Convert M2TS to MP4', category: 'video' },
  { id: 'vob-to-mp4', from: ['vob'], to: 'mp4', description: 'Convert VOB to MP4', category: 'video' },
  { id: 'ogv-to-mp4', from: ['ogv'], to: 'mp4', description: 'Convert OGV to MP4', category: 'video' },
  { id: '3gp-to-mp4', from: ['3gp'], to: 'mp4', description: 'Convert 3GP to MP4', category: 'video' },
  { id: 'asf-to-mp4', from: ['asf'], to: 'mp4', description: 'Convert ASF to MP4', category: 'video' },
  { id: 'rm-to-mp4', from: ['rm'], to: 'mp4', description: 'Convert RealMedia to MP4', category: 'video' },
  { id: 'mp4-to-gif', from: ['mp4'], to: 'gif', description: 'Convert MP4 to animated GIF', category: 'video' },
  { id: 'mp4-to-webm', from: ['mp4'], to: 'webm', description: 'Convert MP4 to WebM', category: 'video' },
  
  // Font Conversions
  { id: 'ttf-to-woff', from: ['ttf'], to: 'woff', description: 'Convert TrueType Font to WOFF', category: 'font' },
  { id: 'ttf-to-woff2', from: ['ttf'], to: 'woff2', description: 'Convert TrueType Font to WOFF2', category: 'font' },
  { id: 'otf-to-woff', from: ['otf'], to: 'woff', description: 'Convert OpenType Font to WOFF', category: 'font' },
  { id: 'otf-to-woff2', from: ['otf'], to: 'woff2', description: 'Convert OpenType Font to WOFF2', category: 'font' },
  { id: 'woff-to-ttf', from: ['woff'], to: 'ttf', description: 'Convert WOFF to TrueType Font', category: 'font' },
  
  // 3D Model Conversions
  { id: 'obj-to-stl', from: ['obj'], to: 'stl', description: 'Convert OBJ to STL', category: '3d' },
  { id: 'stl-to-obj', from: ['stl'], to: 'obj', description: 'Convert STL to OBJ', category: '3d' },
  { id: 'ply-to-stl', from: ['ply'], to: 'stl', description: 'Convert PLY to STL', category: '3d' },
  { id: 'dae-to-obj', from: ['dae'], to: 'obj', description: 'Convert COLLADA to OBJ', category: '3d' },
  { id: '3ds-to-obj', from: ['3ds'], to: 'obj', description: 'Convert 3DS to OBJ', category: '3d' },
  
  // Additional Data Conversions
  { id: 'json-to-xml', from: ['json'], to: 'xml', description: 'Convert JSON to XML', category: 'data' },
  { id: 'json-to-yaml', from: ['json'], to: 'yaml', description: 'Convert JSON to YAML', category: 'data' },
  { id: 'xml-to-csv', from: ['xml'], to: 'csv', description: 'Convert XML to CSV', category: 'data' },
  { id: 'sql-to-json', from: ['sql'], to: 'json', description: 'Convert SQL dump to JSON', category: 'data' },
  { id: 'parquet-to-csv', from: ['parquet'], to: 'csv', description: 'Convert Parquet to CSV', category: 'data' },
  { id: 'avro-to-json', from: ['avro'], to: 'json', description: 'Convert Avro to JSON', category: 'data' },
  
  // Additional Archive Conversions
  { id: 'tar-to-zip', from: ['tar'], to: 'zip', description: 'Convert TAR to ZIP', category: 'archive' },
  { id: 'gz-to-zip', from: ['gz'], to: 'zip', description: 'Convert GZ to ZIP', category: 'archive' },
  { id: 'bz2-to-zip', from: ['bz2'], to: 'zip', description: 'Convert BZ2 to ZIP', category: 'archive' },
  { id: 'xz-to-zip', from: ['xz'], to: 'zip', description: 'Convert XZ to ZIP', category: 'archive' },
  { id: 'cab-to-zip', from: ['cab'], to: 'zip', description: 'Convert CAB to ZIP', category: 'archive' },
  
  // Subtitle Conversions
  { id: 'srt-to-vtt', from: ['srt'], to: 'vtt', description: 'Convert SRT subtitles to WebVTT', category: 'subtitle' },
  { id: 'vtt-to-srt', from: ['vtt'], to: 'srt', description: 'Convert WebVTT to SRT subtitles', category: 'subtitle' },
  { id: 'ass-to-srt', from: ['ass'], to: 'srt', description: 'Convert ASS subtitles to SRT', category: 'subtitle' },
  { id: 'ssa-to-srt', from: ['ssa'], to: 'srt', description: 'Convert SSA subtitles to SRT', category: 'subtitle' },
  
  // Additional eBook Conversions
  { id: 'fb2-to-epub', from: ['fb2'], to: 'epub', description: 'Convert FB2 to EPUB', category: 'ebook' },
  { id: 'lit-to-epub', from: ['lit'], to: 'epub', description: 'Convert LIT to EPUB', category: 'ebook' },
  { id: 'pdb-to-epub', from: ['pdb'], to: 'epub', description: 'Convert PDB to EPUB', category: 'ebook' },
  { id: 'azw3-to-epub', from: ['azw3'], to: 'epub', description: 'Convert AZW3 to EPUB', category: 'ebook' },
  { id: 'cbr-to-pdf', from: ['cbr'], to: 'pdf', description: 'Convert Comic Book RAR to PDF', category: 'ebook' },
  { id: 'cbz-to-pdf', from: ['cbz'], to: 'pdf', description: 'Convert Comic Book ZIP to PDF', category: 'ebook' }
];