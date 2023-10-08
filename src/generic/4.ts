/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// Створюємо інтерфейс для типів пропсів компоненту
interface ComponentProps {
  title: string;
}

// Використовуємо generics для визначення типу пропсів у класі Component
class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
