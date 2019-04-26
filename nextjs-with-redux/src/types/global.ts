interface Window {
  [key: string]: any;
}

type onClick<T> = (e: React.MouseEvent<T, MouseEvent>) => void;
