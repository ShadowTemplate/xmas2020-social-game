import yaml
import argparse


def get_progress(input_file):
    with open(input_file) as in_f:
        people = yaml.load(in_f, Loader=yaml.FullLoader)
        total = len(people)
        discarded = len([v for v in people if v['class'] == 'vip-hide'])
        return discarded * 100 / total


def main():
    parser = argparse.ArgumentParser(
        description='Guess Who progress calculator.'
    )
    parser.add_argument(
        'vipfile',
        type=str,
        help='input vip yaml file'
    )
    args = parser.parse_args()
    print(f"Processing {args.vipfile}...")
    print(f"Progress: {get_progress(args.vipfile)}%")


if __name__ == '__main__':
    main()
